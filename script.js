const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
    header.classList.remove("glass");
  } else {
    header.classList.remove("scrolled");
    header.classList.add("glass");
  }
});

// hedder toggle

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});