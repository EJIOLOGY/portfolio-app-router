import { revalidateTag, revalidatePath } from "next/cache";

//---TAG REVALIDATION---
//http://localhost:3000/api/revalidate?tag=blogs&secret=HelloWorld123

// export async function OPTIONS() {
//   return new Response(null, {
//     status: 204,
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
//       "Access-Control-Allow-Headers": "Content-Type",
//     },
//   });
// }

// export async function POST(request) {
//   const { searchParams } = new URL(request.url);

//   const tag = searchParams.get("tag");
//   const secret = searchParams.get("secret");

//   // Add your logic here
//   if (secret !== process.env.REVALIDATION_TOKEN) {
//     return new Response(JSON.stringify({ message: "Invalid secret!" }), {
//       status: 401,
//     });
//   }

//   if (tag !== "blogs" && tag !== "portfolios") {
//     return new Response(
//       JSON.stringify({
//         message: "Invalid tag! Must be 'blogs' or 'portfolios'.",
//       }),
//       { status: 402 }
//     );
//   }

//   revalidateTag(tag);

//   return new Response(JSON.stringify({ tag, secret }), {
//     status: 200,
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
//       "Access-Control-Allow-Headers": "Content-Type",
//     },
//   });
// }

//---PATH REVALIDATION---
//http://localhost:3000/api/revalidate?path=/&secret=HelloWorld123
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function POST(request) {
  const { searchParams } = new URL(request.url);

  const path = searchParams.get("path");
  const secret = searchParams.get("secret");

  // Add your logic here
  if (secret !== process.env.REVALIDATION_TOKEN) {
    return new Response(JSON.stringify({ message: "Invalid secret!" }), {
      status: 401,
    });
  }

  if (!path) {
    return new Response(
      JSON.stringify({
        message: "Invalid tag! Must be '/blogs' or '/portfolios'.",
      }),
      { status: 402 }
    );
  }

  revalidatePath(path);

  return new Response(JSON.stringify({ tag, secret }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
