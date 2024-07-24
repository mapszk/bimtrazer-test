export async function POST(request: Request) {
  try {
    const { description, startDate, endDate } = await request.json();
    console.log(description, startDate, endDate);
    // const res = await fetch("/api/create", {
    //   method: "POST",
    //   body: JSON.stringify({ description, startDate, endDate }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // if (!res.ok) {
    //   return Response.json({ error: res.statusText }, { status: 500 });
    // }
    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
