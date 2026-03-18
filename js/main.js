// ── DATA ──────────────────────────────────

const PLAYERS = [
  { name: 'Thibaut Courtois',       pos: 'GK',  number: 1,  nation: '🇧🇪', img: 'images/realmadrid_players/1_Courtois.jpg' },
  { name: 'Andriy Lunin',           pos: 'GK',  number: 13, nation: '🇺🇦', img: 'images/realmadrid_players/13_Lunin.jpg' },
  { name: 'Dani Carvajal',          pos: 'DEF', number: 2,  nation: '🇪🇸', img: 'images/realmadrid_players/2_Carvajal.jpg' },
  { name: 'Éder Militão',           pos: 'DEF', number: 3,  nation: '🇧🇷', img: 'images/realmadrid_players/3_E_Militão.jpg' },
  { name: 'David Alaba',            pos: 'DEF', number: 4,  nation: '🇦🇹', img: 'images/realmadrid_players/4_Alaba.jpg' },
  { name: 'Ferland Mendy',          pos: 'DEF', number: 23, nation: '🇫🇷', img: 'images/realmadrid_players/23_F_Mendy.jpg' },
  { name: 'Antonio Rüdiger',        pos: 'DEF', number: 22, nation: '🇩🇪', img: 'images/realmadrid_players/22_Rüdiger.jpg' },
  { name: 'Álvaro Carreras',        pos: 'DEF', number: 18, nation: '🇪🇸', img: 'images/realmadrid_players/18_Á_Carreras.jpg' },
  { name: 'Raúl Asencio',           pos: 'DEF', number: 17, nation: '🇪🇸', img: 'images/realmadrid_players/17_Asencio.jpg' },
  { name: 'Dean Huijsen',           pos: 'DEF', number: 24, nation: '🇳🇱', img: 'images/realmadrid_players/24_Huijsen.jpg' },
  { name: 'Fran García',            pos: 'DEF', number: 20, nation: '🇪🇸', img: 'images/realmadrid_players/20_Fran_García.jpg' },
  { name: 'Jude Bellingham',        pos: 'MID', number: 5,  nation: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', img: 'images/realmadrid_players/5_Bellingham.jpg' },
  { name: 'Federico Valverde',      pos: 'MID', number: 8,  nation: '🇺🇾', img: 'images/realmadrid_players/8_Valverde.jpg' },
  { name: 'Eduardo Camavinga',      pos: 'MID', number: 6,  nation: '🇫🇷', img: 'images/realmadrid_players/6_Camavinga.jpg' },
  { name: 'Aurélien Tchouaméni',    pos: 'MID', number: 14, nation: '🇫🇷', img: 'images/realmadrid_players/14_Tchouaméni.jpg' },
  { name: 'Dani Ceballos',          pos: 'MID', number: 19, nation: '🇪🇸', img: 'images/realmadrid_players/19_D_Ceballos.jpg' },
  { name: 'Trent Alexander-Arnold', pos: 'MID', number: 12, nation: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', img: 'images/realmadrid_players/12_Trent.jpg' },
  { name: 'Vinicius Jr.',           pos: 'FWD', number: 7,  nation: '🇧🇷', img: 'images/realmadrid_players/7_Vini_Jr.jpg' },
  { name: 'Rodrygo Goes',           pos: 'FWD', number: 11, nation: '🇧🇷', img: 'images/realmadrid_players/11_Rodrygo.jpg' },
  { name: 'Kylian Mbappé',          pos: 'FWD', number: 10, nation: '🇫🇷', img: 'images/realmadrid_players/10_Mbappé.jpg' },
  { name: 'Brahim Díaz',            pos: 'FWD', number: 21, nation: '🇲🇦', img: 'images/realmadrid_players/21_Brahim.jpg' },
  { name: 'Arda Güler',             pos: 'FWD', number: 15, nation: '🇹🇷', img: 'images/realmadrid_players/15_Arda_Güler.jpg' },
  { name: 'Gonzalo',                pos: 'FWD', number: 16, nation: '🇧🇷', img: 'images/realmadrid_players/16_Gonzalo.jpg' },
  { name: 'Franco Mastantuono',     pos: 'FWD', number: 30, nation: '🇦🇷', img: 'images/realmadrid_players/30_Mastantuono.jpg' },
];

const RESULTS = [
  { home: 'Real Madrid', away: 'Barcelona',   homeScore: 3, awayScore: 2, comp: 'El Clásico', date: 'Mar 8, 2025',  venue: 'Bernabéu',         result: 'win'  },
  { home: 'Atlético',    away: 'Real Madrid',  homeScore: 1, awayScore: 1, comp: 'La Liga',    date: 'Mar 1, 2025',  venue: 'Metropolitano',     result: 'draw' },
  { home: 'Real Madrid', away: 'Man City',    homeScore: 4, awayScore: 3, comp: 'UCL QF',     date: 'Feb 25, 2025', venue: 'Bernabéu',         result: 'win'  },
  { home: 'Sevilla',     away: 'Real Madrid',  homeScore: 0, awayScore: 2, comp: 'La Liga',    date: 'Feb 18, 2025', venue: 'Sánchez-Pizjuán', result: 'win'  },
  { home: 'Real Madrid', away: 'Valencia',    homeScore: 3, awayScore: 0, comp: 'La Liga',    date: 'Feb 10, 2025', venue: 'Bernabéu',         result: 'win'  },
];

const UPCOMING = [
  { home: 'Real Madrid', away: 'Arsenal',     comp: 'UCL SF', date: 'Apr 8, 2025',  venue: 'Bernabéu',              price: '€120' },
  { home: 'Villarreal',  away: 'Real Madrid', comp: 'La Liga', date: 'Apr 13, 2025', venue: 'Estadio de La Cerámica', price: '€65'  },
  { home: 'Real Madrid', away: 'Getafe',      comp: 'La Liga', date: 'Apr 20, 2025', venue: 'Bernabéu',              price: '€55'  },
  { home: 'Arsenal',     away: 'Real Madrid', comp: 'UCL SF', date: 'Apr 29, 2025', venue: 'Emirates Stadium',       price: '€130' },
];

// ── SQUAD ─────────────────────────────────

function renderSquad(filter) {
  const data = filter === 'all' ? PLAYERS : PLAYERS.filter(p => p.pos === filter);
  let html = '';
  data.forEach(p => {
    html += `
      <div class="player-card" data-pos="${p.pos}">
        <div class="player-photo-wrap">
          <img src="${p.img}" alt="${p.name}" class="player-photo"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"/>
          <div class="player-photo-fallback" style="display:none;">
            <span class="player-num-bg">${p.number}</span>
          </div>
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
      : `<div class="score-vs">VS</div>
         <a href="payment.html" class="btn-ticket">
           <i class="fas fa-ticket-alt"></i> Buy · ${m.price}
         </a>`;
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
