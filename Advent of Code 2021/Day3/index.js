const fs = require('fs');

const bulkData = fs
  .readFileSync('data.txt', 'utf8')
  .split('\r\n')
  .map(line => line.split(''));

// Part 1
const first = arrays => {
  // filter the split arrays to search for concurrency between the numbers in each index.
  const counts = {};
  arrays.forEach(array => {
    array.forEach((value, index) => {
      if (counts[index] === undefined) {
        counts[index] = {};
      }
      if (counts[index][value] === undefined) {
        counts[index][value] = 0;
      }
      counts[index][value] += 1;
    });
  });

  // format to be an integer binary number.
  const maxCountsInt = {};
  Object.keys(counts).forEach(index => {
    const values = Object.keys(counts[index]);
    const maxValue = values.reduce((a, b) => {
      return counts[index][a] > counts[index][b] ? a : b;
    });
    maxCountsInt[index] = Number(maxValue);
  });
  const maxCountsGamma = Object.keys(maxCountsInt).map(
    index => maxCountsInt[index]
  );
  // get gamma rate.
  const gammaRateBinary = maxCountsGamma.join('');

  // replace zeros by ones and vice versa to get the epsilon rate
  const maxCountsEpsilon = gammaRateBinary.split('').map(value => {
    return value === '0' ? '1' : '0';
  });
  // get epsilon rate.
  const epsilonRateBinary = maxCountsEpsilon.join('');

  // get results from binary numbers.
  const gammaRateDecimal = parseInt(gammaRateBinary, 2);
  const epsilonRateDecimal = parseInt(epsilonRateBinary, 2);
  console.log(
    `Reporte de diagnostico realizado, consumo de energía: ${
      gammaRateDecimal * epsilonRateDecimal
    }`
  );
};
first(bulkData);
