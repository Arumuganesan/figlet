
const fs = require('fs');


//  reding a file

let data =  fs.readFileSync('t1.txt','utf8');

console.log(data);

fs.writeFileSync('t2.txt','i am in file 2')

fs.appendFileSync('t2.txt','have a good day')

fs.unlinkSync('t1.txt');
 