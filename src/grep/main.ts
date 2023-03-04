import * as io from 'https://deno.land/std@0.165.0/io/mod.ts'
import { grep, GrepResult } from "./grep.ts"

const encoder = new TextEncoder()

const encode = (result: GrepResult): Uint8Array => {
  const text = `${result.fileName}:${result.line}:${result.text}\n`
  return encoder.encode(text)
}

const [word, root] = Deno.args
const result = await grep(root, word)

const bufWriter = new io.BufWriter(Deno.stdout)
for (const entry of result) {
  await bufWriter.write(encode(entry))
}
await bufWriter.flush()
