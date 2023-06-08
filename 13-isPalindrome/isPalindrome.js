function isPalindrome(word) {
  // Insert code here;
  const cleanedWord = word.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return cleanedWord === cleanedWord.split("").reverse().join("");
}

// Do not edit this line;
module.exports = isPalindrome;
