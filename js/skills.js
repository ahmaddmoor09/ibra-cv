/* ── skills.js – Animate skill bars on scroll ── */

const fills = document.querySelectorAll('.sb-fill');

const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

fills.forEach(fill => barObserver.observe(fill));
