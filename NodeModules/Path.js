const path = require('path');
// pre-requsitics file / txt file t1.txt



let ext = path.extname('C:\Users\Admin\Node-JS\NodeModules\Path.js')
let  baseName = path.basename('C:\\Users\\Admin\\Node-JS\\NodeModules\\Path.js')
//  make sure  thee are  \\ in Node js for extact output 

console.log(ext);
console.log(baseName);
console.log(__filename);
console.log(__dirname);