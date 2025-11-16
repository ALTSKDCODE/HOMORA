(() => {
  'use strict';

  // Enable Bootstrap validation
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      },
      false
    );
  });
})();

// Airbnb-style scroll navbar effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.custom-navbar');
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// -----------------------------
// NAVBAR INTERACTIVITY
// -----------------------------
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const navbar = document.querySelector('.custom-navbar');

  // ✅ Auto close the navbar when clicking nav links (except dropdown)
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      if (link.classList.contains('dropdown-toggle')) {
        return; // ignore dropdown toggle
      }

      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false,
      });
      bsCollapse.hide();
    });
  });

  // Scroll effect for navbar
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});

// -----------------------------
// SEARCH VALIDATION
// -----------------------------
function validateSearch() {
  const q = document.querySelector('.search-input').value.trim();
  if (!q) {
    alert('Please enter a search term.');
    return false;
  }
  return true;
}
