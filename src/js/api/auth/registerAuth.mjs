import { SUPABASE_FILM_URL } from "../../constants.mjs";

export async function register(profile, method, action) {
  const registerURL = SUPABASE_FILM_URL + action;
  console.log(registerURL);
  console.log(action);
  
}