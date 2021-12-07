const fs = require('fs');

const bulkData = fs
  .readFileSync('data.txt', 'utf8')
  .split('\r\n')
  .map(line => line.split(' '))
  .map(line => {
    const [id, value] = line;
    return {
      id,
      value
    };
  });

// Part 1
const first = () => {
  let fwd = 0;
  let depth = 0;
  for (let i = 0; i < bulkData.length; i++) {
    bulkData[i].id === 'forward' ? (fwd += parseInt(bulkData[i].value)) : null;
    bulkData[i].id === 'up' ? (depth -= parseInt(bulkData[i].value)) : null;
    bulkData[i].id === 'down' ? (depth += parseInt(bulkData[i].value)) : null;
  }
  console.log(`fwd: ${fwd}, depth: ${depth}`);
  console.log(`res: ${fwd * depth}`);
};
first();
