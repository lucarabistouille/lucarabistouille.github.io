function updateFont(index) {
  const fonts = [
    { name: 'Antiqua', css: 'Georgia, serif' },
    { name: 'Kurrent', css: "'WiegelKurrent', serif" },
    { name: 'Fraktur', css: "'UnifrakturMaguntia', serif" },
    { name: 'Sütterlin', css: "'GlSuetterlin', serif" },
  ];

  const selected = fonts[index];
  document.querySelectorAll('.german').forEach(el => {
    el.style.fontFamily = selected.css;
  });

  document.getElementById('fontName').textContent = selected.name;

  // 🧠 Save font choice
  localStorage.setItem('selectedFontIndex', index);
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const btn = document.getElementById('toggleDark');
  const isDark = document.body.classList.contains('dark-mode');
  btn.textContent = isDark ? '☀️' : '🌙';

  // 🧠 Save dark mode preference
  localStorage.setItem('darkMode', isDark ? '1' : '0');
}

function toggleToc() {
  const toc = document.querySelector('.toc');
  const btn = document.getElementById('toggleToc');
  if (toc && btn) {
    toc.classList.toggle('hidden');
    const isHidden = toc.classList.contains('hidden');
    btn.textContent = isHidden ? '⬇' : '⬆';
    }
}

document.addEventListener('DOMContentLoaded', function () {
  // Dark mode
  if (localStorage.getItem('darkMode') === '1') {
    document.body.classList.add('dark-mode');
    const btn = document.getElementById('toggleDark');
    if (btn) btn.textContent = '☀️';
  }

  // Font
  const storedFontIndex = localStorage.getItem('selectedFontIndex') || '2';
  const slider = document.getElementById('fontSlider');
  if (slider) slider.value = storedFontIndex;
  updateFont(storedFontIndex);

  // TOC: always visible by default
  const btnToc = document.getElementById('toggleToc');
  if (btnToc) btnToc.textContent = '⬆';
});
