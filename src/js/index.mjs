import * as handlers from "./api/handlers/barrel.mjs";

async function router() {
  const path = window.location.pathname;

  switch (path) {
    case "/":
    case "/index.html":
      
      return;
    case "/about.html":

      return;
    case "/products.html":

      return;
    case "/contact.html":

      return;
    case "/signup.html":
      handlers.setRegisterFormListener();
      return;
    case "/login.html":

      return;
  }
}

router();