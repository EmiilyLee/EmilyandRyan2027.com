document.addEventListener("DOMContentLoaded", () => {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  window.scrollTo(0, 0);

  /* countdown */
  const weddingDate = new Date("September 18, 2027 16:30:00").getTime();
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("cd-days").textContent = days;
    document.getElementById("cd-hours").textContent = hours;
    document.getElementById("cd-mins").textContent = minutes;
    document.getElementById("cd-secs").textContent = seconds;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  /* hamburger menu */
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-links");

  if (!toggle || !menu) return;

  const closeMenu = () => {
    menu.classList.remove("open");
    document.body.classList.remove("menu-open");
    toggle.textContent = "☰";
    toggle.setAttribute("aria-expanded", "false");
  };

  const openMenu = () => {
    menu.classList.add("open");
    document.body.classList.add("menu-open");
    toggle.textContent = "✕";
    toggle.setAttribute("aria-expanded", "true");
  };

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.contains("open");
    isOpen ? closeMenu() : openMenu();
  });

  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", closeMenu);
  });

  menu.addEventListener("click", (e) => {
    if (e.target === menu) closeMenu();
  });

});
