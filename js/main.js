// ── DATA ──────────────────────────────────

const PLAYERS = [
  { name: 'Thibaut Courtois',    pos: 'GK',  number: 1,  nation: '🇧🇪' },
  { name: 'Andriy Lunin',        pos: 'GK',  number: 13, nation: '🇺🇦' },
  { name: 'Dani Carvajal',       pos: 'DEF', number: 2,  nation: '🇪🇸' },
  { name: 'Éder Militão',        pos: 'DEF', number: 3,  nation: '🇧🇷' },
  { name: 'David Alaba',         pos: 'DEF', number: 4,  nation: '🇦🇹' },
  { name: 'Nacho Fernández',     pos: 'DEF', number: 6,  nation: '🇪🇸' },
  { name: 'Ferland Mendy',       pos: 'DEF', number: 23, nation: '🇫🇷' },
  { name: 'Antonio Rüdiger',     pos: 'DEF', number: 22, nation: '🇩🇪' },
  { name: 'Lucas Vázquez',       pos: 'DEF', number: 17, nation: '🇪🇸' },
  { name: 'Toni Kroos',          pos: 'MID', number: 8,  nation: '🇩🇪' },
  { name: 'Luka Modrić',         pos: 'MID', number: 10, nation: '🇭🇷' },
  { name: 'Federico Valverde',   pos: 'MID', number: 15, nation: '🇺🇾' },
  { name: 'Eduardo Camavinga',   pos: 'MID', number: 12, nation: '🇫🇷' },
  { name: 'Aurélien Tchouaméni', pos: 'MID', number: 18, nation: '🇫🇷' },
  { name: 'Dani Ceballos',       pos: 'MID', number: 19, nation: '🇪🇸' },
  { name: 'Vinicius Jr.',        pos: 'FWD', number: 7,  nation: '🇧🇷' },
  { name: 'Rodrygo Goes',        pos: 'FWD', number: 11, nation: '🇧🇷' },
  { name: 'Joselu',              pos: 'FWD', number: 14, nation: '🇪🇸' },
  { name: 'Kylian Mbappé',       pos: 'FWD', number: 9,  nation: '🇫🇷' },
  { name: 'Brahim Díaz',         pos: 'FWD', number: 21, nation: '🇲🇦' },
];

const RESULTS = [
  { home: 'Real Madrid', away: 'Barcelona',  homeScore: 3, awayScore: 2, comp: 'El Clásico', date: 'Mar 8, 2025',  venue: 'Bernabéu',          result: 'win'  },
  { home: 'Atlético',    away: 'Real Madrid', homeScore: 1, awayScore: 1, comp: 'La Liga',    date: 'Mar 1, 2025',  venue: 'Metropolitano',      result: 'draw' },
  { home: 'Real Madrid', away: 'Man City',   homeScore: 4, awayScore: 3, comp: 'UCL QF',     date: 'Feb 25, 2025', venue: 'Bernabéu',          result: 'win'  },
  { home: 'Sevilla',     away: 'Real Madrid', homeScore: 0, awayScore: 2, comp: 'La Liga',    date: 'Feb 18, 2025', venue: 'Sánchez-Pizjuán',  result: 'win'  },
  { home: 'Real Madrid', away: 'Valencia',   homeScore: 3, awayScore: 0, comp: 'La Liga',    date: 'Feb 10, 2025', venue: 'Bernabéu',          result: 'win'  },
];

const UPCOMING = [
  { home: 'Real Madrid', away: 'Arsenal',    comp: 'UCL SF', date: 'Apr 8, 2025',  venue: 'Bernabéu' },
  { home: 'Villarreal',  away: 'Real Madrid', comp: 'La Liga', date: 'Apr 13, 2025', venue: 'Estadio de La Cerámica' },
  { home: 'Real Madrid', away: 'Getafe',     comp: 'La Liga', date: 'Apr 20, 2025', venue: 'Bernabéu' },
  { home: 'Arsenal',     away: 'Real Madrid', comp: 'UCL SF', date: 'Apr 29, 2025', venue: 'Emirates Stadium' },
];

const posIcons = { GK: '🧤', DEF: '🛡️', MID: '⚡', FWD: '⚽' };

// ── SQUAD ─────────────────────────────────

function renderSquad(filter) {
  const data = filter === 'all' ? PLAYERS : PLAYERS.filter(p => p.pos === filter);
  let html = '';
  data.forEach(p => {
    html += `
      <div class="player-card" data-pos="${p.pos}">
        <div class="player-bg">
          <div class="player-num-bg">${p.number}</div>
          <div class="player-icon">${posIcons[p.pos] || '⚽'}</div>
        </div>
        <div class="player-overlay"></div>
        <div class="player-info">
          <div class="player-pos">${p.pos} ${p.nation}</div>
          <div class="player-name">${p.name}</div>
          <div class="player-number">#${p.number}</div>
        </div>
      </div>`;
  });
  $('#squad-grid').html(html);
}

function filterPlayers(pos, btn) {
  $('.filter-btn').removeClass('active');
  $(btn).addClass('active');
  renderSquad(pos);
}

// ── MATCHES ────────────────────────────────

function renderMatches(tab) {
  const data = tab === 'results' ? RESULTS : UPCOMING;
  let html = '';
  data.forEach(m => {
    const scoreEl = tab === 'results'
      ? `<div class="score-display">${m.homeScore} — ${m.awayScore}</div>
         <div class="result-badge ${m.result}">${m.result.toUpperCase()}</div>`
      : `<div class="score-vs">VS</div>`;
    html += `
      <div class="match-card">
        <div class="match-team">
          <div class="team-logo">🏠</div>
          <div><div class="team-name">${m.home}</div><div class="team-league">Home</div></div>
        </div>
        <div class="match-score">${scoreEl}</div>
        <div class="match-team away">
          <div class="team-logo">✈️</div>
          <div><div class="team-name">${m.away}</div><div class="team-league">Away</div></div>
        </div>
        <div class="match-meta">
          <div class="match-comp">${m.comp}</div>
          <div class="match-date">${m.date}</div>
          <div class="match-venue">${m.venue}</div>
        </div>
      </div>`;
  });
  $('#matches-list').html(html);
}

function switchMatchTab(tab, el) {
  $('.match-tab').removeClass('active');
  $(el).addClass('active');
  renderMatches(tab);
}

// ── LOGIN ──────────────────────────────────

function handleLogin() {
  const email = $('#login-email').val().trim();
  const pass  = $('#login-pass').val().trim();
  if (!email || !pass) { showToast('Error', 'Please fill in all fields.'); return; }
  showToast('Welcome!', 'Signed in successfully. Hala Madrid!');
  setTimeout(() => { window.location.href = 'index.html'; }, 1500);
}

// ── CONTACT ────────────────────────────────

function handleContact() {
  const name    = $('#c-name').val().trim();
  const email   = $('#c-email').val().trim();
  const subject = $('#c-subject').val().trim();
  const msg     = $('#c-message').val().trim();
  if (!name || !email || !subject || !msg) { showToast('Error', 'Please fill in all fields.'); return; }
  showToast('Message Sent!', "We'll get back to you shortly. ¡Gracias!");
  $('#c-name, #c-email, #c-subject, #c-message').val('');
}

// ── TOAST ──────────────────────────────────

function showToast(title, msg) {
  $('#toast-title').text(title);
  $('#toast-msg').text(msg);
  $('#toast').addClass('show');
  setTimeout(() => $('#toast').removeClass('show'), 3500);
}

// ── INIT ───────────────────────────────────

$(document).ready(function () {
  if ($('#squad-grid').length)   renderSquad('all');
  if ($('#matches-list').length) renderMatches('results');
});
