// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

// Contact form — disabled (form backend not set up yet)
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.innerHTML = `
      <div style="text-align:center;padding:2.5rem 1rem;">
        <div style="width:56px;height:56px;border-radius:50%;background:rgba(0,112,255,0.12);display:flex;align-items:center;justify-content:center;margin:0 auto 1.25rem;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0070FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>
        </div>
        <h3 style="color:white;margin-bottom:.5rem;">Message Received!</h3>
        <p style="color:#8892A4;">We'll get back to you within 24 hours with a custom quote.</p>
      </div>
    `;
  });
}
