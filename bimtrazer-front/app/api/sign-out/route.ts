import { cookies } from "next/headers";

export async function POST() {
  try {
    cookies().delete("access_token");
    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
