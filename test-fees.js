const { calculateFee } = require("./fees.js");

const cases = [
  [50000,    6875],   // flat tier
  [100000,   6875],   // top of flat tier
  [100001,   7975],   // 1 block into tier 2
  [500000,   15675],  // top of tier 2 (8 blocks)
  [500001,   17795],  // 1 block into tier 3
  [1000000,  26275],  // top of tier 3 (5 blocks)
  [1000001,  28395],  // 1 block into tier 4
  [1500000,  32635],  // the R1.5m example (3 blocks)
  [5000000,  68675],  // top of tier 4 (20 blocks)
  [5000001,  74015],  // 1 block into tier 5
];

for (const [value, expected] of cases) {
  const actual = calculateFee(value);
  console.log(actual === expected ? "PASS" : "FAIL", value, actual, expected);
}