const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const darkTheme = document.querySelector(".toggle");

hamburger.addEventListener("click", () => {
  navLinks.classList.add("open");
  links.forEach((link) => {
    link.classList.add("fade");
  });
});

navLinks.addEventListener("click", () => {
  const sepLink = navLinks;
  sepLink.classList.remove("open");
});

darkTheme.addEventListener("click", () => {
  darkTheme.classList.toggle("focus");
  document.body.classList.toggle("dark");
});