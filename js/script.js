const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("active");
};

const sr = ScrollReveal({
  distance: "60px",
  duration: 1700,
  reset: true,
});

sr.reveal(".home-text", { delay: 350, origin: "left" });
sr.reveal(".home-img", { delay: 350, origin: "right" });
sr.reveal(".party", { delay: 350, origin: "top" });

sr.reveal(".sub-service,.about,.portfolio,.service,.cta,.contact", {
  delay: 200,
  origin: "bottom",
});

var typingEffect = new Typed(".multiText", {
  strings: ["Nuraiman Harith", "Coder", "Web Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1500,
});
