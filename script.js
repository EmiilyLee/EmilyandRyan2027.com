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

// hamburger menu
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-links");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
}
