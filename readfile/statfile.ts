import { lstatSync } from 'deno'
const fileInfo = lstatSync('hellodeno.txt')
// assert(fileInfo.isFile())
console.log(fileInfo.isFile())
// import { lstatSync } from 'deno'
// const fileInfo = deno.lstatSync('hellodeno.txt')
// console.log(fileInfo.isFile())
console.log(fileInfo.isSymlink())
console.log(fileInfo.isDirectory())
console.log(fileInfo.len) // File Size
console.log(fileInfo.modified) // Last modification date
console.log(fileInfo.accessed) // Last access date
console.log(fileInfo.created) // Creation date
