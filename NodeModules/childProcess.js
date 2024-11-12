
const cp = require('child_process');

// cp.execSync('start chrome');
// cp.execSync('start chrome https://www.youtube.com/');
console.log('output' + cp.execSync('node sam.js'))
