const password = document.getElementById('password');
const fill = document.getElementById('strength-fill');
const text = document.getElementById('strength-text');

password.addEventListener('input', () => {
  const val = password.value;
  let strength = 0;

  if (val.length >= 8) strength++;
  if (/[A-Z]/.test(val)) strength++;
  if (/[a-z]/.test(val)) strength++;
  if (/[0-9]/.test(val)) strength++;
  if (/[^A-Za-z0-9]/.test(val)) strength++;

  updateStrength(strength);
});

function updateStrength(score) {
  let width = score * 20;
  fill.style.width = width + '%';

  if (score <= 2) {
    fill.style.background = 'red';
    text.textContent = 'Strength: Weak';
  } else if (score === 3) {
    fill.style.background = 'orange';
    text.textContent = 'Strength: Moderate';
  } else if (score >= 4) {
    fill.style.background = 'green';
    text.textContent = 'Strength: Strong';
  }
}
