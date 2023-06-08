function titleCaseEdit(title) {
  // Insert code here;
  let words = title.split(" ");

  let capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  let result = capitalizedWords.join(" ");

  return result;
}

// Do not edit this line;
module.exports = titleCaseEdit;
