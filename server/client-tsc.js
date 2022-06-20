const args = [ 'tsc' ];
const opts = { stdio: 'inherit', cwd: '../client ', shell: true };
require('child_process').spawn('npx', args, opts);