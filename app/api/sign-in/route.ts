export async function POST() {
  try {
    const res = await fetch("/api/auth", { method: "POST" });
    if (!res.ok) {
      return Response.json({ error: res.statusText }, { status: 500 });
    }
    return Response.json({ ...res.json() }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
