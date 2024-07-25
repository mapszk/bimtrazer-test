import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const { description, startDate, endDate, progress } = await request.json();
    const res = await fetch("http://localhost:3000/block", {
      method: "POST",
      body: JSON.stringify({ description, startDate, endDate, progress }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies().get("access_token")?.value}`,
      },
    });
    const data = await res.json();
    if (!res.ok) {
      return Response.json(data, { status: res.status });
    }
    return Response.json(data, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
