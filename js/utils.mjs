
// Logo Hover ————————————————————————————————————————————————————————————————————————— >
const logo = document.querySelector("#logo");

logo.addEventListener("mouseover", () => {
  logo.src = "/assets/vectors/sjurio-logo_pink_reverse.png"
})

logo.addEventListener("mouseout", () => {
  logo.src = "/assets/vectors/sjurio-logo-black copy.png";
})


// Active Nav Link ————————————————————————————————————————————————————————————————————————— >
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
    console.log(link);
  }
})


