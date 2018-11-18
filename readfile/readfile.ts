import { readFileSync } from 'deno'

const decode = new TextDecoder('utf-8')

const data = readFileSync('hellodeno.txt')

console.log(decode.decode(data))
