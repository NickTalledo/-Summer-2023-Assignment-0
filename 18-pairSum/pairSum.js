function pairSum(nums, target) {
  // Insert code here;
  const complements = new Set();

  for (const num of nums) {
    const complement = target - num;
    if (complements.has(complement)) {
      return true;
    }
    complements.add(num);
  }

  return false;
}

// Do not edit this line;
module.exports = pairSum;
