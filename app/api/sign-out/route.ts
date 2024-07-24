export async function POST() {
  try {
    return Response.json({ succcess: true }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
