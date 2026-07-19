(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const teams = {
    cci: {
      name: 'CCI CLUB',
      league: 'Supervisión · Participación oficial',
      lead: 'Orden, identidad y ambición que se hicieron presentes en la cancha.',
      meta: ['Área: Supervisión', 'Jugadores inscritos: 10', 'Color representativo: Azul', 'Gracias por su participación'],
      highlights: [
        'CCI Club aportó disciplina, compañerismo y una gran actitud competitiva.',
        'Su participación fortaleció la confraternidad entre la Supervisión y todos los equipos del proyecto.',
        'Agradecemos a su delegado y a cada jugador por ser parte de esta jornada institucional.'
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
      realPhoto: 'assets/images/campeonato-real/foto-11.webp',
      realAlt: 'Fotografía real de CCI Club durante la Copa ANIN 2026',
      albumAlt: 'Álbum previo de CCI Club'
    },
    real: {
      name: 'REAL COVACHA',
      league: 'JYS · Participación oficial',
      lead: 'Energía, compañerismo y una presencia que animó cada momento de la jornada.',
      meta: ['Área: JYS', 'Jugadores inscritos: 10', 'Color representativo: Amarillo', 'Gracias por su participación'],
      highlights: [
        'Real Covacha aportó entusiasmo, garra y un gran espíritu de integración.',
        'Su equipo compartió la cancha con respeto y alegría, haciendo más especial la jornada.',
        'Agradecemos a su delegado y a todos sus integrantes por sumarse a la Copa ANIN 2026.'
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
      realPhoto: 'assets/images/campeonato-real/foto-05.webp',
      realAlt: 'Fotografía real de Real Covacha durante la Copa ANIN 2026',
      albumAlt: 'Álbum previo de Real Covacha'
    },
    jys: {
      name: 'JYS EQUIPO PRIME',
      league: 'JYS · Participación oficial',
      lead: 'Entrega, alegría y participación activa en una noche de auténtica confraternidad.',
      meta: ['Área: JYS', 'Jugadores inscritos: 10', 'Color representativo: Amarillo', 'Gracias por su participación'],
      highlights: [
        'JYS Equipo Prime se sumó con energía, disciplina y un gran sentido de equipo.',
        'Su presencia contribuyó al ambiente de amistad y sana competencia que caracterizó el campeonato.',
        'Agradecemos a su delegado y a cada jugador por compartir esta experiencia institucional.'
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
      realPhoto: 'assets/images/campeonato-real/foto-09.webp',
      realAlt: 'Fotografía real de JYS Equipo Prime durante la Copa ANIN 2026',
      albumAlt: 'Álbum previo de JYS Equipo Prime'
    },
    anin: {
      name: 'LOS VOLCÁNICOS DE ANIN',
      league: 'ANIN · Participación oficial',
      lead: 'Orgullo institucional, unión y entusiasmo para representar a ANIN en la cancha.',
      meta: ['Área: ANIN', 'Jugadores inscritos: 10', 'Color representativo: Azul y blanco', 'Gracias por su participación'],
      highlights: [
        'Los Volcánicos de ANIN representaron a la institución con compromiso y espíritu de equipo.',
        'Su participación reafirmó la importancia de crear espacios de integración más allá de las actividades laborales.',
        'Agradecemos a todos los integrantes que hicieron posible la presencia de ANIN en esta jornada.'
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
        ['David Polar Poma','El Iniesta','Pausa, lectura y pase entre líneas para darle sentido a cada ataque.']
      ],
      album: 'assets/images/team-anin-album.png',
      albumLink: 'album-anin.html',
      realPhoto: 'assets/images/campeonato-real/foto-03.webp',
      realAlt: 'Fotografía real de Los Volcánicos de ANIN durante la Copa ANIN 2026',
      albumAlt: 'Álbum previo de Los Volcánicos de ANIN'
    }
  };

  const galleryData = [
    { src: 'assets/images/campeonato-real/foto-01.webp', category: 'cierre', caption: 'Fotografía conjunta de los equipos que disputaron los puestos de honor.' },
    { src: 'assets/images/campeonato-real/foto-02.webp', category: 'cierre', caption: 'La confraternidad y el compañerismo marcaron el cierre de la Copa ANIN 2026.' },
    { src: 'assets/images/campeonato-real/foto-03.webp', category: 'equipos', caption: 'Los Volcánicos de ANIN, representantes de ANIN.' },
    { src: 'assets/images/campeonato-real/foto-04.webp', category: 'equipos', caption: 'Los Volcánicos de ANIN compartiendo la jornada deportiva.' },
    { src: 'assets/images/campeonato-real/foto-05.webp', category: 'equipos', caption: 'Real Covacha, equipo participante de JYS.' },
    { src: 'assets/images/campeonato-real/foto-06.webp', category: 'equipos', caption: 'Integrantes y acompañantes de Los Volcánicos de ANIN.' },
    { src: 'assets/images/campeonato-real/foto-07.webp', category: 'equipos', caption: 'Fotografía institucional de Los Volcánicos de ANIN.' },
    { src: 'assets/images/campeonato-real/foto-08.webp', category: 'equipos', caption: 'Una jornada de integración y amistad para el equipo ANIN.' },
    { src: 'assets/images/campeonato-real/foto-09.webp', category: 'equipos', caption: 'JYS Equipo Prime, presente en la Copa ANIN 2026.' },
    { src: 'assets/images/campeonato-real/foto-10.webp', category: 'equipos', caption: 'JYS Equipo Prime junto a colegas y acompañantes.' },
    { src: 'assets/images/campeonato-real/foto-11.webp', category: 'equipos', caption: 'CCI Club, representante de la Supervisión.' },
    { src: 'assets/images/campeonato-real/foto-12.webp', category: 'accion', caption: 'Los equipos se preparan para una nueva jugada.' },
    { src: 'assets/images/campeonato-real/foto-13.webp', category: 'accion', caption: 'Disputa del balón cerca del área.' },
    { src: 'assets/images/campeonato-real/foto-14.webp', category: 'accion', caption: 'Una acción intensa durante el campeonato.' },
    { src: 'assets/images/campeonato-real/foto-15.webp', category: 'accion', caption: 'El juego limpio y la camaradería estuvieron presentes en cada encuentro.' },
    { src: 'assets/images/campeonato-real/foto-16.webp', category: 'accion', caption: 'Circulación del balón y búsqueda de espacios.' },
    { src: 'assets/images/campeonato-real/foto-17.webp', category: 'accion', caption: 'Los equipos atentos al desarrollo del partido.' },
    { src: 'assets/images/campeonato-real/foto-18.webp', category: 'accion', caption: 'La intensidad del campeonato se vivió en cada sector de la cancha.' },
    { src: 'assets/images/campeonato-real/foto-19.webp', category: 'accion', caption: 'Control y avance en una jugada ofensiva.' },
    { src: 'assets/images/campeonato-real/foto-20.webp', category: 'accion', caption: 'Organización y compañerismo durante el encuentro.' },
    { src: 'assets/images/campeonato-real/foto-21.webp', category: 'accion', caption: 'El balón vuelve a ponerse en movimiento.' },
    { src: 'assets/images/campeonato-real/foto-22.webp', category: 'accion', caption: 'Partido disputado con entusiasmo y respeto.' },
    { src: 'assets/images/campeonato-real/foto-23.webp', category: 'accion', caption: 'Transición ofensiva durante la jornada.' },
    { src: 'assets/images/campeonato-real/foto-24.webp', category: 'accion', caption: 'Duelo por la posesión del balón.' },
    { src: 'assets/images/campeonato-real/foto-25.webp', category: 'accion', caption: 'Acción colectiva frente al arco.' },
    { src: 'assets/images/campeonato-real/foto-26.webp', category: 'accion', caption: 'Ataque y cobertura defensiva en la cancha Balón Fuego.' },
    { src: 'assets/images/campeonato-real/foto-27.webp', category: 'accion', caption: 'Una jugada aérea durante el campeonato.' },
    { src: 'assets/images/campeonato-real/foto-28.webp', category: 'accion', caption: 'Conducción del balón en el centro del campo.' },
    { src: 'assets/images/campeonato-real/foto-29.webp', category: 'accion', caption: 'Los equipos mantuvieron la intensidad hasta el final.' },
    { src: 'assets/images/campeonato-real/foto-30.webp', category: 'accion', caption: 'Últimos minutos de una jornada llena de entusiasmo.' },
    { src: 'assets/images/campeonato-real/foto-31.webp', category: 'accion', caption: 'Una imagen final de la experiencia vivida en la Copa ANIN 2026.' }
  ];

  const seedComments = [
    { author: 'Organización Copa ANIN', team: 'COPA ANIN 2026', message: 'Gracias a los cuatro equipos por hacer posible una jornada de integración, compañerismo y sana competencia.', createdAt: '2026-07-18T09:00:00-05:00' },
    { author: 'Afición ANIN', team: 'LOS VOLCÁNICOS DE ANIN', message: 'Una noche para recordar. Felicitaciones a todos por la participación y el espíritu deportivo.', createdAt: '2026-07-18T09:15:00-05:00' },
    { author: 'Colegas de JYS', team: 'JYS EQUIPO PRIME', message: 'Excelente iniciativa. Gracias por promover la integración entre todos los equipos del proyecto.', createdAt: '2026-07-18T09:25:00-05:00' },
    { author: 'Supervisión', team: 'CCI CLUB', message: 'Felicitaciones a todos los participantes. La confraternidad fue la verdadera ganadora.', createdAt: '2026-07-18T09:40:00-05:00' }
  ];

  let activeGalleryItems = [...galleryData];
  let activePhotoIndex = 0;

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
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
    }, { threshold: 0.1 });
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
    $('#team-meta').innerHTML = team.meta.map((item) => `<span>${escapeHtml(item)}</span>`).join('');
    $('#team-highlights').innerHTML = team.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
    $('#team-roster').innerHTML = team.roster.map(([name, nickname, narrative], index) => `
      <article class="roster-card">
        <span>${String(index + 1).padStart(2, '0')}</span>
        <div><strong>${escapeHtml(name)}</strong><b>“${escapeHtml(nickname)}”</b><small>${escapeHtml(narrative)}</small></div>
      </article>
    `).join('');

    const realImage = $('#team-real-image');
    const albumImage = $('#team-album-image');
    realImage.src = team.realPhoto;
    realImage.alt = team.realAlt;
    albumImage.src = team.album;
    albumImage.alt = team.albumAlt;
    $('#team-real-link').href = team.realPhoto;
    $('#team-album-link').href = team.albumLink || team.album;
  }

  function renderGallery(filter = 'all') {
    const gallery = $('#real-gallery');
    if (!gallery) return;

    activeGalleryItems = filter === 'all'
      ? [...galleryData]
      : galleryData.filter((item) => item.category === filter);

    gallery.innerHTML = activeGalleryItems.map((item, index) => `
      <button class="gallery-photo-card" type="button" data-gallery-index="${index}" aria-label="Abrir fotografía: ${escapeHtml(item.caption)}">
        <img src="${item.src}" alt="${escapeHtml(item.caption)}" loading="lazy">
        <span><b>${String(index + 1).padStart(2, '0')}</b>${escapeHtml(item.caption)}</span>
      </button>
    `).join('');
  }

  function openLightbox(index) {
    const item = activeGalleryItems[index];
    if (!item) return;
    activePhotoIndex = index;
    $('#lightbox-image').src = item.src;
    $('#lightbox-image').alt = item.caption;
    $('#lightbox-caption').textContent = item.caption;
    const modal = $('#photo-lightbox');
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    $('.photo-lightbox-close').focus();
  }

  function closeLightbox() {
    const modal = $('#photo-lightbox');
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  function stepLightbox(direction) {
    activePhotoIndex = (activePhotoIndex + direction + activeGalleryItems.length) % activeGalleryItems.length;
    openLightbox(activePhotoIndex);
  }

  function setupGallery() {
    renderGallery('all');

    $$('.gallery-filter').forEach((button) => {
      button.addEventListener('click', () => {
        $$('.gallery-filter').forEach((item) => item.classList.toggle('is-active', item === button));
        renderGallery(button.dataset.filter);
      });
    });

    $('#real-gallery').addEventListener('click', (event) => {
      const card = event.target.closest('[data-gallery-index]');
      if (card) openLightbox(Number(card.dataset.galleryIndex));
    });

    $$('[data-close-lightbox]').forEach((item) => item.addEventListener('click', closeLightbox));
    $('.photo-lightbox-prev').addEventListener('click', () => stepLightbox(-1));
    $('.photo-lightbox-next').addEventListener('click', () => stepLightbox(1));

    document.addEventListener('keydown', (event) => {
      const modal = $('#photo-lightbox');
      if (!modal.classList.contains('open')) return;
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowLeft') stepLightbox(-1);
      if (event.key === 'ArrowRight') stepLightbox(1);
    });
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
    return new Date(value).toLocaleString('es-PE', {
      day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
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
        <div class="comment-card-head"><strong>${escapeHtml(item.author)}</strong><span>${escapeHtml(item.team)}</span></div>
        <p>${escapeHtml(item.message)}</p><small>${formatDate(item.createdAt)}</small>
      </article>
    `).join('');
  }

  function setupCommentsForm() {
    const form = $('#comments-form');
    const message = $('#comment-message');
    if (!form || !message) return;

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      message.classList.remove('show', 'success');
      const author = form.author.value.trim();
      const team = form.team.value.trim();
      const comment = form.message.value.trim();

      if (author.length < 2 || !team || comment.length < 8) {
        message.textContent = 'Completa tu nombre, la delegación y un mensaje de al menos 8 caracteres.';
        message.classList.add('show');
        return;
      }

      const comments = getComments();
      comments.push({ author, team, message: comment, createdAt: new Date().toISOString() });
      saveComments(comments);
      form.reset();
      message.textContent = 'Tu mensaje fue publicado correctamente en este dispositivo.';
      message.classList.add('show', 'success');
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

  $$('.team-button').forEach((button) => button.addEventListener('click', () => activateTeam(button.dataset.team)));
  window.addEventListener('scroll', updateHeader, { passive: true });

  updateHeader();
  setupReveal();
  setupMenu();
  activateTeam('cci');
  setupGallery();
  setupCommentsForm();
  renderComments();
})();
