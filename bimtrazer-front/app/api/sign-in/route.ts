import { cookies } from "next/headers";

export async function POST() {
  try {
    const res = await fetch("http://localhost:3000/auth/sign-in", {
      method: "POST",
    });
    if (!res.ok) {
      return Response.json({ error: res.statusText }, { status: 500 });
    }
    const { access_token } = await res.json();
    cookies().set("access_token", access_token, {
      secure: true,
      httpOnly: true,
    });
    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
