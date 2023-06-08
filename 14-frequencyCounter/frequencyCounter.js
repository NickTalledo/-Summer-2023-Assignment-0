function frequencyCounter(word) {
  // Insert code here;
  const frequency = {};

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    frequency[letter] = frequency[letter] ? frequency[letter] + 1 : 1;
  }

  return frequency;
}

// Do not edit this line;
module.exports = frequencyCounter;
