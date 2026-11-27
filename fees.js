// fees.js
// Guideline fee schedule (2026). Next year, update the numbers in SCHEDULE only.

const SCHEDULE = {
  year: 2026,
  tiers: [
    // Each tier applies to values above `from` and up to and including `upTo`.
    // fee = base + (blocks above `from`, rounded up) x perBlock
    { from: 0,       upTo: 100000,   base: 6875,  blockSize: null,    perBlock: 0 },
    { from: 100000,  upTo: 500000,   base: 6875,  blockSize: 50000,   perBlock: 1100 },
    { from: 500000,  upTo: 1000000,  base: 15675, blockSize: 100000,  perBlock: 2120 },
    { from: 1000000, upTo: 5000000,  base: 26275, blockSize: 200000,  perBlock: 2120 },
    { from: 5000000, upTo: Infinity, base: 68675, blockSize: 1000000, perBlock: 5340 },
  ],
};

function calculateFee(value) {
  if (!Number.isFinite(value) || value <= 0) {
    return null; // invalid input
  }

  const tier = SCHEDULE.tiers.find((t) => value <= t.upTo);

  if (tier.blockSize === null) {
    return tier.base; // flat fee tier
  }

  // "or part thereof" means always round UP to the next whole block
  const blocks = Math.ceil((value - tier.from) / tier.blockSize);
  return tier.base + blocks * tier.perBlock;
}

// Lets us test this file in Node without breaking it in the browser
if (typeof module !== "undefined") {
  module.exports = { SCHEDULE, calculateFee };
}