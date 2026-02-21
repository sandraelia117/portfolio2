// 1. تأثير الكتابة التلقائية (Typed.js)
var typed = new Typed('.typing', {
    strings: ['sandra elia', 'Frontend Developer', 'data engineering'],
    typeSpeed: 80,
    backSpeed: 40,
    loop: true
  });
  
  // 2. تبديل الوضع (Dark/Light Mode)
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const icon = themeToggle.querySelector('i');
  
  
    // تغيير الأيقونة من شمس إلى قمر والعكس
    if (document.body.classList.contains('light-mode')) {
        icon.classList.replace('fa-sun', 'fa-moon');
    } else {
        icon.classList.replace('fa-moon', 'fa-sun');
    }
  });
  
  // 3. إعداد النجوم الخلفية (Particles.js)
  particlesJS("particles-js", {
    "particles": {
        "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#ffffff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5 },
        "size": { "value": 3 },
        "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.2, "width": 1 },
        "move": { "enable": true, "speed": 2 }
  
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": { "onhover": { "enable": true, "mode": "grab" } }
    },
    "retina_detect": true
  });
  
  const filterButtons = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
  
        const filterValue = button.getAttribute('data-filter');
  
        skillCards.forEach(card => {
            // "all" أو لو التصنيف مطابق
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = "block"; // يظهر كعنصر داخل الجريد
                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform = "scale(1)";
                }, 10);
            } else {
                card.style.opacity = "0";
                card.style.transform = "scale(0.8)";
                setTimeout(() => {
                    card.style.display = "none";
                }, 300);
            }
        });
    });
  });