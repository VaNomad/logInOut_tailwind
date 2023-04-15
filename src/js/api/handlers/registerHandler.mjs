import { register } from "../auth/registerAuth.mjs";

export function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());
    const method = form.method;
    const action = form.action;

    // console.log(profile);

    register(profile, method, action);
  })
}