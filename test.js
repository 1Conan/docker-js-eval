const cp = require('child_process');
const assert = require('assert');

console.log('environment: script and node-cjs should work');

assert.equal(cp.execSync(`echo '{"environment":"script", "code": "2+2"}' | ./run.sh`) + '', '4');
assert.equal(cp.execSync(`./run.sh '{"environment":"node-cjs", "code": "2+2"}'`) + '', '4');


console.log('environment: node-cjs should have core module available globally');

assert.equal(cp.execSync(`./run.sh '{"environment":"node-cjs", "code": "console.assert(fs); 1"}'`) + '', '1');