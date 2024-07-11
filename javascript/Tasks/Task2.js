function longestWord(inputString) {
  return inputString.split(" ").reduce((longest, currentWord) => {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
}

const inputString = "This is Optimusfox js internship class";
const longestOutput = longestWord(inputString);
console.log(longestOutput);