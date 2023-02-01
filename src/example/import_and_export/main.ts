import { sayHello } from "./util.ts"
sayHello("world")

import * as util from "./util.ts"
util.sayHello("world")

import { VERSION } from "https://deno.land/std/version.ts"
console.log(VERSION)
