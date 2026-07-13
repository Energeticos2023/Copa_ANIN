(() => {
  "use strict";

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const form = $("#registration-form");
  const playersList = $("#players-list");
  const template = $("#player-template");
  const modal = $("#success-modal");
  const endpoint = window.ANIN_CONFIG?.REGISTRATION_ENDPOINT?.trim() || "";
  const MIN_PLAYERS = 6;
  const MAX_PLAYERS = 15;

  const pad = (value) => String(value).padStart(2, "0");

  function updateCountdown() {
    const node = $("#countdown");
    const eventDate = new Date("2026-07-17T19:00:00-05:00");
    const distance = Math.max(0, eventDate.getTime() - Date.now());
    const days = Math.floor(distance / 86400000);
    const hours = Math.floor((distance % 86400000) / 3600000);
    const minutes = Math.floor((distance % 3600000) / 60000);
    node.innerHTML = `<b>${pad(days)}</b><em>D</em><b>${pad(hours)}</b><em>H</em><b>${pad(minutes)}</b><em>M</em>`;
  }

  function updateHeader() {
    $(".site-header").classList.toggle("scrolled", window.scrollY > 90);
  }

  function setupReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    $$(".reveal").forEach((item) => observer.observe(item));
  }

  function updatePlayerRows() {
    const rows = $$(".player-row", playersList);
    rows.forEach((row, index) => {
      $(".player-number", row).textContent = pad(index + 1);
      $("[data-field='name']", row).name = `player_${index + 1}_name`;
      $("[data-field='dni']", row).name = `player_${index + 1}_dni`;
      $("[data-field='gender']", row).name = `player_${index + 1}_gender`;
      $(".remove-player", row).hidden = rows.length <= MIN_PLAYERS;
    });
    $("#player-count").textContent = `${rows.length} registrados`;
    $("#add-player").hidden = rows.length >= MAX_PLAYERS;
  }

  function addPlayer() {
    if ($$(".player-row", playersList).length >= MAX_PLAYERS) return;
    playersList.append(template.content.cloneNode(true));
    updatePlayerRows();
  }

  function clearFieldError(input) {
    input.classList.remove("invalid");
    const error = input.closest(".field")?.querySelector(".error");
    if (error) error.textContent = "";
  }

  function showFieldError(input, message) {
    input.classList.add("invalid");
    const error = input.closest(".field")?.querySelector(".error");
    if (error) error.textContent = message;
  }

  function validateForm() {
    let valid = true;
    $$("input, select", form).forEach(clearFieldError);
    $("#form-message").classList.remove("show");

    const rules = [
      [form.elements.teamName, (v) => v.trim().length >= 3, "Ingresa un nombre de equipo válido."],
      [form.elements.jersey, (v) => v.trim().length >= 3, "Indica el color de camiseta."],
      [form.elements.delegate, (v) => v.trim().split(/\s+/).length >= 2, "Ingresa nombres y apellidos."],
      [form.elements.phone, (v) => /^\+?[\d\s-]{9,15}$/.test(v.trim()), "Ingresa un celular válido."],
      [form.elements.email, (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()), "Ingresa un correo válido."]
    ];
    rules.forEach(([input, test, message]) => {
      if (!test(input.value)) { showFieldError(input, message); valid = false; }
    });

    const players = $$(".player-row", playersList);
    const dnis = [];
    players.forEach((row) => {
      const name = $("[data-field='name']", row);
      const dni = $("[data-field='dni']", row);
      const gender = $("[data-field='gender']", row);
      if (name.value.trim().split(/\s+/).length < 2) { showFieldError(name, "Completa nombre y apellido."); valid = false; }
      if (!/^\d{8}$/.test(dni.value.trim())) { showFieldError(dni, "Debe tener 8 dígitos."); valid = false; }
      if (!gender.value) { showFieldError(gender, "Selecciona una opción."); valid = false; }
      dnis.push(dni.value.trim());
    });
    dnis.forEach((dni, index) => {
      if (dni && dnis.indexOf(dni) !== index) {
        showFieldError($("[data-field='dni']", players[index]), "Este DNI está repetido.");
        valid = false;
      }
    });

    const selectedSport = form.elements.sport.value;
    if (selectedSport === "Vóley mixto") {
      const genders = players.map((row) => $("[data-field='gender']", row).value);
      if (!genders.includes("Femenino") || !genders.includes("Masculino")) {
        const message = $("#form-message");
        message.textContent = "Para vóley mixto, registra participantes femeninos y masculinos.";
        message.classList.add("show");
        valid = false;
      }
    }

    if (!form.elements.consent.checked) {
      const message = $("#form-message");
      message.textContent = "Debes aceptar las bases y confirmar la veracidad de los datos.";
      message.classList.add("show");
      valid = false;
    }
    if (!valid) form.querySelector(".invalid")?.focus();
    return valid;
  }

  function getPayload(code) {
    return {
      code,
      submittedAt: new Date().toISOString(),
      event: "Copa ANIN 2026",
      sport: form.elements.sport.value,
      teamName: form.elements.teamName.value.trim(),
      organization: form.elements.organization.value.trim(),
      jersey: form.elements.jersey.value.trim(),
      delegate: {
        name: form.elements.delegate.value.trim(),
        phone: form.elements.phone.value.trim(),
        email: form.elements.email.value.trim().toLowerCase()
      },
      players: $$(".player-row", playersList).map((row) => ({
        name: $("[data-field='name']", row).value.trim(),
        dni: $("[data-field='dni']", row).value.trim(),
        gender: $("[data-field='gender']", row).value
      }))
    };
  }

  function saveLocally(payload) {
    const key = "anin_championship_registrations";
    const records = JSON.parse(localStorage.getItem(key) || "[]");
    records.push(payload);
    localStorage.setItem(key, JSON.stringify(records));
  }

  async function submitRegistration(payload) {
    if (!endpoint) {
      saveLocally(payload);
      return;
    }
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!response.ok) throw new Error("No se pudo completar el registro remoto.");
  }

  function generateCode() {
    const time = Date.now().toString(36).slice(-4).toUpperCase();
    const random = Math.random().toString(36).slice(2, 5).toUpperCase();
    return `ANIN-${time}${random}`;
  }

  function openModal(code) {
    $("#registration-code").textContent = code;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    $(".modal-close", modal).focus();
  }

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  function resetForm() {
    form.reset();
    playersList.innerHTML = "";
    for (let i = 0; i < MIN_PLAYERS; i += 1) addPlayer();
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!validateForm()) return;
    const button = $(".submit-button", form);
    const original = button.innerHTML;
    button.disabled = true;
    button.innerHTML = "<span>REGISTRANDO EQUIPO…</span><i>•••</i>";
    const code = generateCode();
    try {
      await submitRegistration(getPayload(code));
      openModal(code);
      resetForm();
    } catch (error) {
      const message = $("#form-message");
      message.textContent = "No pudimos registrar el equipo. Revisa tu conexión e inténtalo nuevamente.";
      message.classList.add("show");
      console.error(error);
    } finally {
      button.disabled = false;
      button.innerHTML = original;
    }
  }

  $("#add-player").addEventListener("click", addPlayer);
  playersList.addEventListener("click", (event) => {
    const button = event.target.closest(".remove-player");
    if (!button) return;
    button.closest(".player-row").remove();
    updatePlayerRows();
  });
  playersList.addEventListener("input", (event) => {
    if (event.target.matches("[data-field='dni']")) event.target.value = event.target.value.replace(/\D/g, "").slice(0, 8);
    clearFieldError(event.target);
  });
  form.addEventListener("input", (event) => clearFieldError(event.target));
  form.addEventListener("submit", handleSubmit);

  $$(".choose-sport").forEach((button) => button.addEventListener("click", () => {
    const radio = $(`input[name='sport'][value='${button.dataset.sport}']`, form);
    if (radio) radio.checked = true;
    $("#inscripcion").scrollIntoView({ behavior: "smooth" });
  }));

  $(".menu-toggle").addEventListener("click", (event) => {
    const open = document.body.classList.toggle("menu-open");
    event.currentTarget.setAttribute("aria-expanded", String(open));
  });
  $$(".main-nav a").forEach((link) => link.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
    $(".menu-toggle").setAttribute("aria-expanded", "false");
  }));

  $(".modal-close").addEventListener("click", closeModal);
  $(".modal-done").addEventListener("click", closeModal);
  $(".modal-backdrop").addEventListener("click", closeModal);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) closeModal();
  });
  window.addEventListener("scroll", updateHeader, { passive: true });

  for (let i = 0; i < MIN_PLAYERS; i += 1) addPlayer();
  updateCountdown();
  setInterval(updateCountdown, 60000);
  updateHeader();
  setupReveal();
})();
