const fs = require('fs');
//fs.readFile('file.txt', 'utf-8', (err, data)=>{
//    console.log(err, data)
//})


//Using Sync to block
//const a = fs.readFileSync('file.txt');
//console.log(a.toString()) 

//fs.writeFile('file2.txt', "This is a test code",()=>{
//  console.log("content written")
const wf = fs.writeFileSync('file2.txt', "This is a test code 2");
console.log(wf)

console.log("Finished reading file")