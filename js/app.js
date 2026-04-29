/* ── Shared nav + footer injected on every page ── */
(function(){
const BASE = 'https://www.theasianbanker.com/summit2026/';

const NAV = `
<nav class="nav">
  <div class="inner">
    <a href="index.html" class="nav-logo">
      <img src="${BASE}assets/images/logo/logo.png" alt="The Asian Banker" onerror="this.style.display='none'">
      <div class="nav-logo-text">
        <span class="nav-logo-tag">The Asian Banker</span>
        <span class="nav-logo-name">Summit 2026</span>
      </div>
    </a>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="speakers.html">Speakers</a></li>
      <li><a href="programme.html">Programme</a></li>
      <li><a href="sponsors.html">Sponsors</a></li>
      <li><a href="venue.html">Venue</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <a href="register.html" class="btn btn-red" style="font-size:.72rem">Register Now</a>
    <button class="nav-burger" aria-label="Menu"><span></span><span></span><span></span></button>
  </div>
</nav>
<div class="mobile-nav">
  <button class="mobile-nav-close">✕</button>
  <a href="index.html">Home <span>→</span></a>
  <a href="about.html">About <span>→</span></a>
  <a href="speakers.html">Speakers <span>→</span></a>
  <a href="programme.html">Programme <span>→</span></a>
  <a href="sponsors.html">Sponsors <span>→</span></a>
  <a href="venue.html">Venue <span>→</span></a>
  <a href="contact.html">Contact <span>→</span></a>
  <a href="register.html" style="color:var(--red)">Register Now <span>→</span></a>
</div>`;

const FOOTER = `
<div class="nl">
  <div class="container">
    <p class="label" style="color:rgba(255,255,255,.5);margin-bottom:.75rem">Stay Informed</p>
    <h2 class="nl-title">Get summit updates</h2>
    <p class="nl-sub">Speaker reveals, programme releases &amp; early-bird alerts.</p>
    <form class="nl-form" onsubmit="event.preventDefault();this.querySelector('.nl-btn').textContent='Subscribed ✓'">
      <input class="nl-input" type="email" placeholder="your@email.com" required>
      <button class="nl-btn" type="submit">Subscribe</button>
    </form>
  </div>
</div>
<footer>
  <div class="container">
    <div class="footer-grid">
      <div>
        <img src="${BASE}assets/images/logo/logo.png" alt="The Asian Banker" class="footer-logo" onerror="this.style.display='none'">
        <p class="footer-brand">The Asian Banker Summit 2026</p>
        <p class="footer-desc">Asia's most prominent annual gathering of global banking leaders — since 1999.</p>
        <div class="footer-social mt-3">
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="X">𝕏</a>
          <a href="#" aria-label="YouTube">▶</a>
        </div>
      </div>
      <div>
        <p class="footer-col-title">Summit</p>
        <ul class="footer-links">
          <li><a href="about.html">About</a></li>
          <li><a href="speakers.html">Speakers</a></li>
          <li><a href="programme.html">Programme</a></li>
          <li><a href="venue.html">Venue</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-col-title">Participate</p>
        <ul class="footer-links">
          <li><a href="register.html">Register</a></li>
          <li><a href="sponsors.html">Sponsor / Exhibit</a></li>
          <li><a href="contact.html">Apply to Speak</a></li>
          <li><a href="contact.html">Media Accreditation</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-col-title">Contact</p>
        <ul class="footer-links">
          <li><a href="mailto:summit@theasianbanker.com">summit@theasianbanker.com</a></li>
          <li><a href="https://www.theasianbanker.com" target="_blank">theasianbanker.com</a></li>
        </ul>
        <p style="margin-top:1rem;font-size:.78rem;line-height:1.65">13–14 May 2026<br>Mandarin Oriental, KL</p>
        <img src="${BASE}assets/img-2026/banner-logo/HRD-Corp-claimable-logo.webp" alt="HRD Corp" style="height:36px;width:auto;margin-top:1rem;opacity:.6" onerror="this.style.display='none'">
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 TAB Global. All rights reserved.</span>
      <div class="footer-legal">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms</a>
        <a href="#">Cookies</a>
      </div>
    </div>
  </div>
</footer>`;

  const tmp = document.createElement('div');
  tmp.innerHTML = NAV;
  while(tmp.firstChild) document.body.insertBefore(tmp.firstChild, document.body.firstChild);

  const tmp2 = document.createElement('div');
  tmp2.innerHTML = FOOTER;
  while(tmp2.firstChild) document.body.appendChild(tmp2.firstChild);

  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
    if(a.getAttribute('href') === page) a.classList.add('active');
  });

  const nav = document.querySelector('.nav');
  const onScroll = () => nav.classList.toggle('scrolled', scrollY > 40);
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  const burger = document.querySelector('.nav-burger');
  const mob = document.querySelector('.mobile-nav');
  const cls = document.querySelector('.mobile-nav-close');
  const close = () => { mob.classList.remove('open'); document.body.style.overflow=''; };
  burger?.addEventListener('click', ()=>{ mob.classList.add('open'); document.body.style.overflow='hidden'; });
  cls?.addEventListener('click', close);
  mob?.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
})();

document.addEventListener('DOMContentLoaded', ()=>{

  /* Reveal */
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, {threshold:.1});
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  /* Counters */
  const co = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(!e.isIntersecting) return;
      const el = e.target, target = +el.dataset.target, sfx = el.dataset.suffix||'';
      const s = performance.now();
      const step = ts => {
        const p = Math.min((ts-s)/1400, 1), ease = 1-Math.pow(1-p,3);
        el.textContent = Math.floor(ease*target)+sfx;
        if(p<1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      co.unobserve(el);
    });
  },{threshold:.5});
  document.querySelectorAll('[data-target]').forEach(el => co.observe(el));

  /* Schedule tabs */
  document.querySelectorAll('.day-tab').forEach(tab => {
    tab.addEventListener('click', ()=>{
      document.querySelectorAll('.day-tab').forEach(t=>t.classList.remove('active'));
      document.querySelectorAll('.schedule-panel').forEach(p=>p.style.display='none');
      tab.classList.add('active');
      const t = document.getElementById(tab.dataset.tab);
      if(t) t.style.display='block';
    });
  });

  /* FAQ */
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', ()=>{
      const item = q.closest('.faq-item'), was = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
      if(!was) item.classList.add('open');
    });
  });

  /* Hash scroll */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e=>{
      const t = document.querySelector(a.getAttribute('href'));
      if(t){ e.preventDefault(); window.scrollTo({top:t.getBoundingClientRect().top+scrollY-80, behavior:'smooth'}); }
    });
  });

});
