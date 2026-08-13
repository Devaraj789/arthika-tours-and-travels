// ════════════════════════════════
// ARTHIKA TOURS – script.js
// ════════════════════════════════

/* ── HERO SLIDER ── */
var slides = document.querySelectorAll('.slide');
var dotsContainer = document.getElementById('dots');
var current = 0;
var autoTimer;

// Create dots
slides.forEach(function(_, i) {
  var d = document.createElement('button');
  d.className = 'dot' + (i === 0 ? ' active' : '');
  d.setAttribute('aria-label', 'Slide ' + (i+1));
  d.onclick = function() { goSlide(i); };
  dotsContainer.appendChild(d);
});

function goSlide(n) {
  slides[current].classList.remove('active');
  document.querySelectorAll('.dot')[current].classList.remove('active');
  current = (n + slides.length) % slides.length;
  slides[current].classList.add('active');
  document.querySelectorAll('.dot')[current].classList.add('active');
  resetTimer();
}

function changeSlide(dir) { goSlide(current + dir); }

function resetTimer() {
  clearInterval(autoTimer);
  autoTimer = setInterval(function() { goSlide(current + 1); }, 5000);
}

resetTimer();

/* ── MOBILE NAV ── */
var ham = document.getElementById('ham');
var nav = document.getElementById('mainNav');
if (ham) {
  ham.addEventListener('click', function() {
    nav.classList.toggle('open');
  });
}

// Close nav on outside click
document.addEventListener('click', function(e) {
  if (nav && !nav.contains(e.target) && !ham.contains(e.target)) {
    nav.classList.remove('open');
  }
});

/* ── WHATSAPP BOOKING FORM ── */
function sendWhatsApp(e) {
  e.preventDefault();
  var name    = document.getElementById('fname').value.trim();
  var phone   = document.getElementById('fphone').value.trim();
  var from    = document.getElementById('ffrom').value.trim();
  var to      = document.getElementById('fto').value.trim();
  var date    = document.getElementById('fdate').value;
  var vehicle = document.getElementById('fvehicle').value;
  var note    = document.getElementById('fnote').value.trim();

  var msg =
    'Hello Arthika Tours and Travels! 🙏\n\n' +
    '📋 *Booking Request*\n' +
    '━━━━━━━━━━━━━━━━━━\n' +
    '👤 Name: ' + name + '\n' +
    '📞 Phone: ' + phone + '\n' +
    '📍 From: ' + from + '\n' +
    '🏁 To: ' + to + '\n' +
    '📅 Date: ' + (date || 'Flexible') + '\n' +
    '🚗 Vehicle: ' + vehicle + '\n' +
    (note ? '📝 Notes: ' + note + '\n' : '') +
    '━━━━━━━━━━━━━━━━━━\n' +
    'Please confirm my booking. Thank you!';

  window.open('https://wa.me/919994023634?text=' + encodeURIComponent(msg), '_blank');
}

/* ── STICKY HEADER SHADOW ── */
window.addEventListener('scroll', function() {
  var header = document.querySelector('.site-header');
  if (header) {
    if (window.scrollY > 10) {
      header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    } else {
      header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    }
  }
});

/* ── SMOOTH ACTIVE NAV LINK ── */
(function() {
  var path = window.location.pathname;
  document.querySelectorAll('.main-nav a').forEach(function(link) {
    if (link.getAttribute('href') === path.split('/').pop()) {
      link.classList.add('active');
    }
  });
})();// ════════════════════════════════
// ARTHIKA TOURS – script.js
// ════════════════════════════════

/* ── HERO SLIDER ── */
var slides = document.querySelectorAll('.slide');
var dotsContainer = document.getElementById('dots');
var current = 0;
var autoTimer;

// Create dots
slides.forEach(function(_, i) {
  var d = document.createElement('button');
  d.className = 'dot' + (i === 0 ? ' active' : '');
  d.setAttribute('aria-label', 'Slide ' + (i+1));
  d.onclick = function() { goSlide(i); };
  dotsContainer.appendChild(d);
});

function goSlide(n) {
  slides[current].classList.remove('active');
  document.querySelectorAll('.dot')[current].classList.remove('active');
  current = (n + slides.length) % slides.length;
  slides[current].classList.add('active');
  document.querySelectorAll('.dot')[current].classList.add('active');
  resetTimer();
}

function changeSlide(dir) { goSlide(current + dir); }

function resetTimer() {
  clearInterval(autoTimer);
  autoTimer = setInterval(function() { goSlide(current + 1); }, 5000);
}

resetTimer();

/* ── MOBILE NAV ── */
var ham = document.getElementById('ham');
var nav = document.getElementById('mainNav');
if (ham) {
  ham.addEventListener('click', function() {
    nav.classList.toggle('open');
  });
}

// Close nav on outside click
document.addEventListener('click', function(e) {
  if (nav && !nav.contains(e.target) && !ham.contains(e.target)) {
    nav.classList.remove('open');
  }
});

/* ── WHATSAPP BOOKING FORM ── */
function sendWhatsApp(e) {
  e.preventDefault();
  var name    = document.getElementById('fname').value.trim();
  var phone   = document.getElementById('fphone').value.trim();
  var from    = document.getElementById('ffrom').value.trim();
  var to      = document.getElementById('fto').value.trim();
  var date    = document.getElementById('fdate').value;
  var vehicle = document.getElementById('fvehicle').value;
  var note    = document.getElementById('fnote').value.trim();

  var msg =
    'Hello Arthika Tours and Travels! 🙏\n\n' +
    '📋 *Booking Request*\n' +
    '━━━━━━━━━━━━━━━━━━\n' +
    '👤 Name: ' + name + '\n' +
    '📞 Phone: ' + phone + '\n' +
    '📍 From: ' + from + '\n' +
    '🏁 To: ' + to + '\n' +
    '📅 Date: ' + (date || 'Flexible') + '\n' +
    '🚗 Vehicle: ' + vehicle + '\n' +
    (note ? '📝 Notes: ' + note + '\n' : '') +
    '━━━━━━━━━━━━━━━━━━\n' +
    'Please confirm my booking. Thank you!';

  window.open('https://wa.me/919994023634?text=' + encodeURIComponent(msg), '_blank');
}

/* ── STICKY HEADER SHADOW ── */
window.addEventListener('scroll', function() {
  var header = document.querySelector('.site-header');
  if (header) {
    if (window.scrollY > 10) {
      header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    } else {
      header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    }
  }
});

/* ── SMOOTH ACTIVE NAV LINK ── */
(function() {
  var path = window.location.pathname;
  document.querySelectorAll('.main-nav a').forEach(function(link) {
    if (link.getAttribute('href') === path.split('/').pop()) {
      link.classList.add('active');
    }
  });
})();
