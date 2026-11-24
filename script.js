document.addEventListener('DOMContentLoaded', function () {

  // Inisialisasi AOS
  AOS.init({
    once: true,
    duration: 800
  });


  // ==========================================
  // SCROLLSPY NAVBAR
  // ==========================================

  const navbarLinks = document.querySelectorAll('#main-navbar .nav-link');

  const sections = [
    document.getElementById('hero'),
    document.getElementById('about'),
    document.getElementById('menu'),
    document.getElementById('gallery'),
    document.getElementById('testimoni'),
    document.getElementById('faq'),
    document.getElementById('contact')
  ];

  function updateScrollSpy() {

    const scrollPosition = window.scrollY + 150;

    let currentSection = 'hero';

    sections.forEach(section => {

      if (!section) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute('id');
      }

    });

    navbarLinks.forEach(link => {

      link.classList.remove('active');

      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }

    });

  }

  window.addEventListener('scroll', updateScrollSpy);

  window.addEventListener('load', updateScrollSpy);


  // ==========================================
  // SMOOTH SCROLL NAVBAR
  // ==========================================

  navbarLinks.forEach(link => {

    link.addEventListener('click', function(e) {

      const targetId = this.getAttribute('href');

      if (!targetId || !targetId.startsWith('#')) return;

      const targetSection = document.querySelector(targetId);

      if (targetSection) {

        e.preventDefault();

        const navbarHeight =
          document.getElementById('main-navbar').offsetHeight;

        const targetPosition =
          targetSection.offsetTop - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

      }

    });

  });


  // SCRIPT LOGIKA ACCORDION FAQ

      // SCRIPT LOGIKA ACCORDION FAQ
      document.querySelectorAll('.custom-faq-btn').forEach(button => {
        button.addEventListener('click', function() {
          const targetId = this.getAttribute('data-target');
          const targetElement = document.querySelector(targetId);
          
          document.querySelectorAll('#accordionFAQ .accordion-collapse').forEach(item => {
            if (item !== targetElement) {
              item.classList.remove('show');
              if (item.previousElementSibling) {
                const btn = item.previousElementSibling.querySelector('.custom-faq-btn');
                if (btn) btn.classList.add('collapsed');
              }
            }
          });

          if (targetElement.classList.contains('show')) {
            targetElement.classList.remove('show');
            this.classList.add('collapsed');
          } else {
            targetElement.classList.add('show');
            this.classList.remove('collapsed');
          }
        });
      });

      // Script Filter Produk
      const filterButtons = document.querySelectorAll('#filter-tabs .nav-link');
      const productItems = document.querySelectorAll('.product-item');

      filterButtons.forEach(button => {
        button.addEventListener('click', () => {
          filterButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');

          const filterValue = button.getAttribute('data-filter');

          productItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            if (filterValue === 'all' || filterValue === itemCategory) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
          });
        });
      });

      // Script Pop-up Notifikasi Pesanan
      const buyerNames = ["Siti A.", "Budi S.", "Andi M.", "Rina K.", "Dian P.", "Hendra T.", "Nia W."];
      const cities = ["Jakarta", "Surabaya", "Bandung", "Makassar", "Medan", "Semarang", "Yogyakarta"];
      const products = ["Batik Pria Premium", "Batik Wanita Elegant", "Batik Couple Sarimbit", "Batik Modern Slimfit"];
      const timeAgoList = ["Baru saja", "1 menit lalu", "2 menit lalu", "5 menit lalu"];

      const notifElement = document.getElementById("orderNotif");
      const notifText = document.getElementById("notifText");
      const notifTime = document.getElementById("notifTime");

      function showRandomNotification() {
        const randomName = buyerNames[Math.floor(Math.random() * buyerNames.length)];
        const randomCity = cities[Math.floor(Math.random() * cities.length)];
        const randomProduct = products[Math.floor(Math.random() * products.length)];
        const randomTime = timeAgoList[Math.floor(Math.random() * timeAgoList.length)];

        notifText.innerHTML = `<strong>${randomName}</strong> (${randomCity}) baru saja membeli <strong>${randomProduct}</strong>`;
        notifTime.innerText = randomTime;

        notifElement.classList.add("show");

        setTimeout(() => {
          notifElement.classList.remove("show");
        }, 4000);
      }

      setTimeout(showRandomNotification, 3000);

      setInterval(() => {
        showRandomNotification();
      }, Math.floor(Math.random() * 4000) + 8000);
    });