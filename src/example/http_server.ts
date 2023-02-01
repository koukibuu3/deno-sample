import { serve } from "https://deno.land/std@0.175.0/http/server.ts"

const handler = async (): Promise<Response> => {
  const response = await fetch("https://api.github.com/users/denoland", {
    headers: {
      accept: "application/json",
    },
  });

  return new Response(response.body, {
    status: response.status,
    headers: {
      "content-type": "application/json",
    },
  })
}

// console.log("Listening on http://localhost:8000")
serve(handler)
