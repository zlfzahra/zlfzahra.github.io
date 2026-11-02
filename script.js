// Mobile Navigation
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
    });
  });
}

// Dark / Light Theme
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);

  if (themeToggle) {
    themeToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme");

    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);

    themeToggle.textContent = nextTheme === "dark" ? "☀️" : "🌙";
  });
}

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.05 }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

// Active Navigation on Scroll
const sections = document.querySelectorAll(
  "#home, #about, #projects, #publications, #contact"
);

const navItems = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const currentId = entry.target.id;

        navItems.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${currentId}`
          );
        });
      }
    });
  },
  {
    rootMargin: "-25% 0px -60% 0px",
    threshold: 0
  }
);

sections.forEach((section) => {
  sectionObserver.observe(section);
});
