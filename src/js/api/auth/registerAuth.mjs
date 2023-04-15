import { SUPABASE_FILM_URL } from "../../constants.mjs";

const action = "/auth/register";
const method = "post";

export async function register(profile) {
  const registerURL = SUPABASE_FILM_URL + action;
  const body = JSON.stringify(profile);
  console.log(registerURL);
  console.log(action);

  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json"
    },
    method,
    body
  })

  const result = await response.json();
  console.log(result);
  
  
}