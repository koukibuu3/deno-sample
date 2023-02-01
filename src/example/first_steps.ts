console.log("Welcome to Deno!")

const url = Deno.args[0]
const response = await fetch(url)
const body = new Uint8Array(await response.arrayBuffer())
await Deno.stdout.write(body)
