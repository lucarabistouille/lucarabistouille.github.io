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
  
    // 🧠 Sauvegarde le choix de police
    localStorage.setItem('selectedFontIndex', index);
  }
  
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const btn = document.getElementById('toggleDark');
    const isDark = document.body.classList.contains('dark-mode');
    btn.textContent = isDark ? '☀️' : '🌙';
  
    // 🧠 Sauvegarde le choix du mode
    localStorage.setItem('darkMode', isDark ? '1' : '0');
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    // 🌙 Restaurer le mode nuit si activé
    if (localStorage.getItem('darkMode') === '1') {
      document.body.classList.add('dark-mode');
      const btn = document.getElementById('toggleDark');
      if (btn) btn.textContent = '☀️';
    }
  
    // 🔤 Restaurer le choix de police (défaut : Fraktur = 2)
    const storedFontIndex = localStorage.getItem('selectedFontIndex') || '2';
    const slider = document.getElementById('fontSlider');
    if (slider) slider.value = storedFontIndex;
    updateFont(storedFontIndex);
  });
  