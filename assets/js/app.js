(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const teams = {
    cci: {
      name: 'CCI CLUB',
      league: 'Supervisión · Plantel oficial',
      lead: 'Orden, identidad y compañerismo para disfrutar una gran jornada deportiva.',
      meta: [
        'Área: Supervisión',
        'Jugadores: 10',
        'Figura: Pedro Huaraca “El Messi”',
        'Camiseta: Azul con dorado'
      ],
      highlights: [
        'Un plantel equilibrado que mezcla pausa, visión y sacrificio colectivo.',
        'Pedro Huaraca lidera la expectativa con el sello de “El Messi”.',
        'CCI CLUB quiere imponer orden, inteligencia táctica y ambición competitiva.'
      ],
      roster: [
        ['Pedro Huaraca Rojas','El Messi','Visión total, gambeta corta y definición inteligente.'],
        ['Juan Crisbaldo Mamani Morocco','El Modrić','Pausa, orden y control en la mitad.'],
        ['Erik Eduard Romani Chávez','El Julián','Presión alta, movilidad y gol.'],
        ['Luis Enrique Aquino Núñez','El Van Dijk','Firmeza, lectura y liderazgo atrás.'],
        ['Ricardo Amenero Rivera','El Griezmann','Sacrificio, asociación y sorpresa ofensiva.'],
        ['Raúl Velazco Infa','El Rodri','Equilibrio, recuperación y salida limpia.'],
        ['Franklin Michael García Aquino','El De Bruyne','Asistencia fina y cambio de ritmo.'],
        ['Efraín Torres Maquera','El Vinícius','Desequilibrio, velocidad y atrevimiento.'],
        ['Phool Camacho Zorogastua','El Lautaro','Instinto de área y garra.'],
        ['Alexis Tito Machaca','El Cristiano','Salto, potencia y hambre de gol.']
      ],
      album: 'assets/images/team-cci-album.png',
      albumLink: 'assets/images/team-cci-album.png',
      jersey: 'assets/images/team-cci-jersey.png',
      albumAlt: 'Álbum oficial de CCI CLUB',
      jerseyAlt: 'Camiseta oficial de CCI CLUB'
    },
    real: {
      name: 'REAL COVACHA',
      league: 'JYS · Plantel oficial',
      lead: 'Rugido, velocidad y contundencia en un equipo hecho para competir con garra.',
      meta: [
        'Área: JYS',
        'Jugadores: 10',
        'Figura: Mario Flores “El Haaland”',
        'Camiseta: Dorado con negro'
      ],
      highlights: [
        'Su identidad visual se inspira en la fuerza del león y el espíritu ganador.',
        'Mario Flores asume el rol de “El Haaland”, sinónimo de potencia y gol.',
        'Real Covacha promete intensidad, remate fuerte y una actitud feroz.'
      ],
      roster: [
        ['Ronald Altamirano Echevarria','El Dibu','Seguridad, carácter y reflejos.'],
        ['Stalinn Vargas Carpio','El Rúben Dias','Mando, cierre y orden defensivo.'],
        ['José Eduardo Chávez Lee','El Kroos','Pase largo, control y serenidad.'],
        ['Luis Alberto Soto Chicoma','El Bellingham','Despliegue, personalidad y llegada.'],
        ['Kevin Maurelio Vásquez Oropeza','El Harry Kane','Remate fuerte y lectura ofensiva.'],
        ['Omar Edu Álvarez Escobar','El Salah','Diagonales, aceleración y golpe letal.'],
        ['Mario Genaro Flores Quispe','El Haaland','Potencia, zancada y gol implacable.'],
        ['Nilson Fernando Rodríguez Cera','El Kvaratskhelia','Desequilibrio, rebeldía y magia.'],
        ['José Bernardo Mocarro Willis','El Lautaro','Cazador del gol y presión constante.'],
        ['Karol Quispe Cabrera','El Vinícius','Uno contra uno y chispa pura.']
      ],
      album: 'assets/images/team-real-album.png',
      albumLink: 'assets/images/team-real-album.png',
      jersey: 'assets/images/team-real-jersey.png',
      albumAlt: 'Álbum oficial de REAL COVACHA',
      jerseyAlt: 'Camiseta oficial de REAL COVACHA'
    },
    jys: {
      name: 'JYS EQUIPO PRIME',
      league: 'JYS · Plantel oficial',
      lead: 'Intensidad, disciplina y compañerismo para animar el encuentro amistoso.',
      meta: [
        'Área: JYS',
        'Jugadores: 10',
        'Figura: Abner Illatopa “El Yamal”',
        'Camiseta: Amarillo premium'
      ],
      highlights: [
        'Abner Illatopa encarna la rebeldía, el descaro y la frescura de “El Yamal”.',
        'Es un plantel moderno, agresivo y con una propuesta dinámica.',
        'JYS Equipo Prime llega con liderazgo, pase filtrado y talento joven.'
      ],
      roster: [
        ['Abner Jesús Illatopa Chamorro','El Yamal','Descaro, talento y creatividad precoz.'],
        ['Luis Carlos Aguilar Huamani','El Rodri','Equilibrio táctico y pase limpio.'],
        ['Abel Enmanuel Alva Castillo','El Van Dijk','Fortaleza y lectura aérea.'],
        ['César Absalón Murillo Bonifacio','El Rüdiger','Intensidad, marca y coraje.'],
        ['Eder Arnulfo Tapia Campana','El Carvajal','Energía, oficio e ida y vuelta.'],
        ['Gabriel Omar Mendoza Flores','El Bernardo Silva','Técnica corta e inteligencia.'],
        ['Gerardo Manuel Medina Tapia','El Bruno Fernandes','Liderazgo, pase filtrado y remate.'],
        ['Juan Leonardo Zavala Ossio','El Foden','Movilidad, timing y talento fino.'],
        ['Marco Antonio Salazar Yancari','El Musiala','Gambeta, cambio de ritmo y frescura.'],
        ['Paulo César Salazar García','El Lewandowski','Definición, oficio y presencia.']
      ],
      album: 'assets/images/team-jys-album.png',
      albumLink: 'assets/images/team-jys-album.png',
      jersey: 'assets/images/team-jys-jersey.png',
      albumAlt: 'Álbum oficial de JYS EQUIPO PRIME',
      jerseyAlt: 'Camiseta oficial de JYS EQUIPO PRIME'
    },
    anin: {
      name: 'LOS VOLCÁNICOS',
      league: 'Club ANIN · Plantel confirmado',
      lead: 'Energía, orgullo azul y personalidad para animar la jornada amistosa.',
      meta: [
        'Club: ANIN',
        'Jugadores: 11',
        'Figura: Rafael Zeña “El Mbappé”',
        'Camiseta: Azul volcánico'
      ],
      highlights: [
        'José Rafael Zeña Peche asume el rol de “El Mbappé”, explosivo y decisivo.',
        'Su estética volcánica transmite energía, coraje y pasión por competir.',
        'Juan Antonio Cori Mamani es “El Guerrero”; Henry Mamani Contreras, “El Motor”; David Polar Poma aporta pausa y visión; y Jaime Henry Quea Ccama se suma al plantel.',
        'Los Volcánicos llegan para compartir una jornada de integración con identidad y fuego interno.'
      ],
      roster: [
        ['Felipe Sánchez Quispe','El Courtois','Altura, manos firmes y seguridad.'],
        ['Herbert Bondia Condori','El Kimmich','Disciplina, precisión y recorrido.'],
        ['Edwin Antallaca Chipana','El Marquinhos','Anticipo, temple y mando.'],
        ['Jorge Luis Tito Marrón','El Hakimi','Velocidad, ida y vuelta, ambición.'],
        ['Gabriel Rivera Saavedra','El Bellingham','Despliegue, jerarquía y llegada.'],
        ['José Rafael Zeña Peche','El Mbappé','Explosión, confianza y gol decisivo.'],
        ['Juan Antonio Cori Mamani','El Guerrero','Coraje, entrega y lucha hasta el final.'],
        ['José Antonio Palomino Puma','El Julián','Presión, movilidad y oportunismo.'],
        ['Henry Mamani Contreras','El Motor','Energía, recorrido y conexión permanente con el juego.'],
        ['David Polar Poma','El Iniesta','Pausa, lectura y pase entre líneas para darle sentido a cada ataque.'],
        ['Jaime Henry Quea Ccama','Nuevo refuerzo','48 años · DNI 29734274.', true]
      ],
      album: 'assets/images/team-anin-album.png',
      albumLink: 'album-anin.html',
      jersey: 'assets/images/team-anin-jersey.png',
      albumAlt: 'Álbum de LOS VOLCÁNICOS',
      jerseyAlt: 'Camiseta de LOS VOLCÁNICOS'
    }
  };

  const seedComments = [
    { author: 'Afición local', team: 'LOS VOLCÁNICOS', message: 'Este equipo llega con mucha personalidad. ¡Los Volcánicos van a dar pelea!', createdAt: '2026-07-16T19:15:00-05:00' },
    { author: 'Hincha CCI', team: 'CCI CLUB', message: 'Pedro Huaraca promete espectáculo. CCI CLUB se ve muy ordenado y competitivo.', createdAt: '2026-07-16T19:22:00-05:00' },
    { author: 'Barra JYS', team: 'JYS EQUIPO PRIME', message: 'Abner Illatopa tiene que romperla. Ese álbum está de nivel mundial.', createdAt: '2026-07-16T19:34:00-05:00' },
    { author: 'Tribuna Covacha', team: 'REAL COVACHA', message: 'Real Covacha tiene presencia y una camiseta imponente. ¡Vamos con todo!', createdAt: '2026-07-16T19:44:00-05:00' }
  ];

  function updateCountdown() {
    const node = $('#countdown');
    if (!node) return;
    const eventDate = new Date('2026-07-17T20:00:00-05:00');
    const distance = Math.max(0, eventDate.getTime() - Date.now());
    const days = Math.floor(distance / 86400000);
    const hours = Math.floor((distance % 86400000) / 3600000);
    const minutes = Math.floor((distance % 3600000) / 60000);
    const pad = (value) => String(value).padStart(2, '0');
    node.innerHTML = `<b>${pad(days)}</b><em>D</em><b>${pad(hours)}</b><em>H</em><b>${pad(minutes)}</b><em>M</em>`;
  }

  function updateHeader() {
    const header = $('.site-header');
    if (header) header.classList.toggle('scrolled', window.scrollY > 90);
  }

  function setupReveal() {
    const items = $$('.reveal');
    if (!('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
  }

  function activateTeam(teamKey) {
    const team = teams[teamKey];
    if (!team) return;

    $$('.team-button').forEach((button) => {
      const active = button.dataset.team === teamKey;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-selected', String(active));
    });

    $('#team-league').textContent = team.league;
    $('#team-title').textContent = team.name;
    $('#team-lead').textContent = team.lead;

    $('#team-meta').innerHTML = team.meta.map((item) => `<span>${item}</span>`).join('');
    $('#team-highlights').innerHTML = team.highlights.map((item) => `<li>${item}</li>`).join('');

    const roster = $('#team-roster');
    roster.innerHTML = team.roster.map(([name, nickname, narrative, isNew], index) => `
      <article class="roster-card${isNew ? ' roster-card-new' : ''}">
        <span>${String(index + 1).padStart(2, '0')}</span>
        <div>${isNew ? '<em>NUEVO</em>' : ''}<strong>${escapeHtml(name)}</strong><b>“${escapeHtml(nickname)}”</b><small>${escapeHtml(narrative)}</small></div>
      </article>
    `).join('');

    const albumImage = $('#team-album-image');
    const jerseyImage = $('#team-jersey-image');
    albumImage.src = team.album;
    albumImage.alt = team.albumAlt;
    jerseyImage.src = team.jersey;
    jerseyImage.alt = team.jerseyAlt;

    $('#team-album-link').href = team.albumLink || team.album;
    $('#team-jersey-link').href = team.jersey;
  }

  function getComments() {
    const key = 'anin_comment_wall_v1';
    const current = JSON.parse(localStorage.getItem(key) || 'null');
    if (current && Array.isArray(current) && current.length) return current;
    localStorage.setItem(key, JSON.stringify(seedComments));
    return [...seedComments];
  }

  function saveComments(comments) {
    localStorage.setItem('anin_comment_wall_v1', JSON.stringify(comments));
  }

  function formatDate(value) {
    const date = new Date(value);
    return date.toLocaleString('es-PE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  function renderComments() {
    const list = $('#comments-list');
    const count = $('#comment-count');
    if (!list || !count) return;

    const comments = getComments().slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    count.textContent = `${comments.length} comentario${comments.length === 1 ? '' : 's'}`;

    list.innerHTML = comments.map((item) => `
      <article class="comment-card">
        <div class="comment-card-head">
          <strong>${escapeHtml(item.author)}</strong>
          <span>${escapeHtml(item.team)}</span>
        </div>
        <p>${escapeHtml(item.message)}</p>
        <small>${formatDate(item.createdAt)}</small>
      </article>
    `).join('');
  }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function setupCommentsForm() {
    const form = $('#comments-form');
    const message = $('#comment-message');
    if (!form || !message) return;

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      message.classList.remove('show');
      const author = form.author.value.trim();
      const team = form.team.value.trim();
      const comment = form.message.value.trim();

      if (author.length < 2 || !team || comment.length < 8) {
        message.textContent = 'Completa tu nombre, el equipo y un comentario de al menos 8 caracteres.';
        message.classList.add('show');
        return;
      }

      const comments = getComments();
      comments.push({
        author,
        team,
        message: comment,
        createdAt: new Date().toISOString()
      });
      saveComments(comments);
      form.reset();
      message.textContent = 'Tu comentario fue publicado correctamente.';
      message.classList.add('show');
      renderComments();
    });
  }

  function setupMenu() {
    const toggle = $('.menu-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', (event) => {
      const open = document.body.classList.toggle('menu-open');
      event.currentTarget.setAttribute('aria-expanded', String(open));
    });

    $$('.main-nav a').forEach((link) => link.addEventListener('click', () => {
      document.body.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  $$('.team-button').forEach((button) => {
    button.addEventListener('click', () => activateTeam(button.dataset.team));
    button.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const buttons = $$('.team-button');
      const current = buttons.indexOf(button);
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? buttons.length - 1 : (current + (event.key === 'ArrowRight' ? 1 : -1) + buttons.length) % buttons.length;
      buttons[next].focus();
      activateTeam(buttons[next].dataset.team);
    });
  });

  updateCountdown();
  setInterval(updateCountdown, 60000);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
  setupReveal();
  setupMenu();
  activateTeam('cci');
  setupCommentsForm();
  renderComments();
})();
