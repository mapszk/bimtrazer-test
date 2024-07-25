"use server";

import { cookies } from "next/headers";

export async function signIn() {
  return fetch("http://localhost:3000/auth/sign-in", {
    method: "POST",
  })
    .then(async (res) => {
      if (!res.ok) throw new Error(res.statusText);
      else {
        const data = await res.json();
        cookies().set("access_token", data.access_token);
        return data;
      }
    })
    .catch((err) => {
      return err;
    });
}

export async function signOut() {
  cookies().delete("access_token");
}
