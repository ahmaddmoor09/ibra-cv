/* ── home.js – Home page typewriter ── */

const roles = [
  'Software Developer',
  'Network Engineer',
  'Cybersecurity Specialist',
  'IT Problem Solver',
  'Full Stack Developer',
  'Cloud Enthusiast'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typedText');

function typeEffect() {
  if (!typedEl) return;

  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    typedEl.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1800);
      return;
    }
  } else {
    typedEl.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  const speed = isDeleting ? 55 : 90;
  setTimeout(typeEffect, speed);
}

typeEffect();

// Animate stats counter
const stats = document.querySelectorAll('.stat-number');
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.textContent);
      let count = 0;
      const suffix = el.textContent.replace(/[0-9]/g, '');
      const step = Math.ceil(target / 40);
      const interval = setInterval(() => {
        count += step;
        if (count >= target) {
          el.textContent = target + suffix;
          clearInterval(interval);
        } else {
          el.textContent = count + suffix;
        }
      }, 40);
      statObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

stats.forEach(stat => statObserver.observe(stat));
