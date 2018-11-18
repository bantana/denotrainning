import { writeFileSync } from 'deno'

const encode = new TextEncoder('utf-8')

const data = encode.encode('hello, deno, writeFileSync!')

writeFileSync('hellodeno.txt', data)
