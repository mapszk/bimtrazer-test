"use server";

import { API_BASE_URL } from "@/constants/api";
import { cookies } from "next/headers";

export async function signIn() {
  const res = await fetch(API_BASE_URL + "/auth/sign-in", {
    method: "POST",
  });
  if (!res.ok) throw new Error(res.statusText);
  const data = await res.json();
  cookies().set("access_token", data.access_token, {
    secure: true,
    maxAge: 60,
  });
  return data;
}

export async function signOut() {
  cookies().delete("access_token");
}
