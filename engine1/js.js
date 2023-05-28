const nav = document.querySelector("nav");
const btn = document.querySelector("#btn-nav");
console.log();
btn.addEventListener("click", basculNav);

function basculNav() {
  nav.classList.toggle("visible");
  return;
}
