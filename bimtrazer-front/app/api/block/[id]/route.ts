import { cookies } from "next/headers";

export async function PATCH(request: Request) {
  try {
    const { id, progress, startDate, endDate } = await request.json();
    const res = await fetch(
      "http://localhost:3000/block/" + request.url.split("/").pop(),
      {
        method: "PATCH",
        body: JSON.stringify({ id, progress, startDate, endDate }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies().get("access_token")?.value}`,
        },
      }
    );
    if (!res.ok) {
      return Response.json({ error: res.statusText }, { status: 500 });
    }
    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
