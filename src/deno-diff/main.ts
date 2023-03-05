const DIR = 'src/deno-diff'

const [file1, file2] = Deno.args

Deno.run({
  cmd: ['./src/deno-diff/git-diff.sh', `${DIR}/${file1}`, `${DIR}/${file2}`],
})
