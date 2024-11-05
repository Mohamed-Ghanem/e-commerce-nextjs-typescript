export async function GET(request: Request) {
  try {
    const res = await fetch('https://dummyjson.com/products')
    const resJSON = await res.json()
    return new Response(
      JSON.stringify(resJSON),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error }),
      { status: 500 }
    );
  }
}