const logo = document.querySelector("#logo");
const logoTest = document.querySelector(".logo");


// logo.addEventListener("mouseover", () => {
//   logo.src = "/assets/vectors/sjurio-logo_pink_reverse.png"
//   logo.to
// })

// logo.addEventListener("mouseout", () => {
//   logo.src = "/assets/vectors/sjurio-logo-black copy.png";

// })

logo.addEventListener("mouseover", () => {
  logo.src = "/assets/vectors/sjurio-logo_pink_reverse.png"
})

logo.addEventListener("mouseout", () => {
  logo.src = "/assets/vectors/sjurio-logo-black copy.png";
})

// Global eventlistener
// addGlobalEventlistener("click", "div", e => {
//   console.log("hi");
// })

// function addGlobalEventlistener(type, selector, callback) {
//   document.addEventListener(type, e => {
//     if (e.target.matches(selector)) callback(e)
//   })
// }