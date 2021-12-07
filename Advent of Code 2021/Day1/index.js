const fs = require('fs');

const bulkData = fs
  .readFileSync('data.txt', 'utf8')
  .split('\n')
  .filter(x => Boolean(x))
  .map(x => parseInt(x));
// console.log(bulkData);

const firstExercise = () => {
  let counter = 0;
  for (let i = 0; i < bulkData.length; i++) {
    const last = bulkData[i - 1];
    const current = bulkData[i];
    current > last ? counter++ : null;
  }
  console.log(`In this test, ${counter} depth measurements were obtained.`);
};

const secondExercise = () => {
  let counter = 0;
  for (let i = 0; i < bulkData.length; i++) {
    const last = bulkData[i - 1] + bulkData[i - 2] + bulkData[i - 3];
    const current = bulkData[i] + bulkData[i - 1] + bulkData[i - 2];
    current > last ? counter++ : null;
  }
  console.log(
    `In this test, the sum of each sliding window increased ${counter} times`
  );
};

firstExercise();
secondExercise();
