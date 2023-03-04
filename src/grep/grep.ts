import * as io from 'https://deno.land/std@0.165.0/io/mod.ts'
import { walk } from 'https://deno.land/std@0.165.0/fs/walk.ts'

export type GrepResult = {
  fileName: string
  line: number
  text: string
}

export const grep = async (
  root: string,
  word: string,
): Promise<GrepResult[]> => {
  const result = []

  for await (const entry of walk(root, { skip: [/^\.git/] })) {
    if (!entry.isFile) continue

    const file = await Deno.open(entry.path)
    try {
      let line = 1
      for await (const text of io.readLines(file)) {
        if (text.match(word)) {
          result.push({ fileName: entry.path, line, text })
        }
        line++
      }
    } finally {
      file.close() // 忘れずに閉じる
    }
  }
  return result
}
