import { grep } from './grep.ts'
import { assertEquals } from 'https://deno.land/std@0.165.0/testing/asserts.ts'

Deno.test({
  name: 'test grep',
  fn: async () => {
    const excepted = [{
      fileName: 'src/grep/testdata/hello.txt',
      line: 2,
      text: 'hello world, sample!',
    }, {
      fileName: 'src/grep/testdata/sample.txt',
      line: 1,
      text: 'this is sample text',
    }]

    const actual = await grep('src/grep/testdata', 'sample')
    assertEquals(actual, excepted)
  },
})
