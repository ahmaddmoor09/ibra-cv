/* ── contact.js – Form submission handler ── */

const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formSuccess = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic validation
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let valid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.style.borderColor = '#f43f5e';
        valid = false;
      } else {
        input.style.borderColor = '';
      }
    });

    if (!valid) return;

    // Simulate sending
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation:spin 1s linear infinite">
        <path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
      Sending...
    `;

    setTimeout(() => {
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="22" y1="2" x2="11" y2="13"/>
          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
        Send Message
      `;
      formSuccess.style.display = 'flex';
      setTimeout(() => { formSuccess.style.display = 'none'; }, 5000);
    }, 1600);
  });

  // Remove red border on input
  form.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('focus', () => {
      input.style.borderColor = '';
    });
  });
}

// Add spin keyframe
document.head.insertAdjacentHTML('beforeend', `
<style>
@keyframes spin { to { transform: rotate(360deg); } }
</style>
`);
