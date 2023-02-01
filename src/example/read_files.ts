const fileNames = Deno.args
for (const fileName of fileNames) {
  const file = await Deno.open(fileName)
  await file.readable.pipeTo(Deno.stdout.writable)
}
