function longestWord(inputString) {
    const words = inputString.split(" ");
    let longest = "";
    for (const word of words) {
      if (word.length > longest.length) {
        longest = word;
      }
    }
    return longest;
  }
  const inputString = "This is Optimusfox js internship class";
  const longestOutput = longestWord(inputString);
  console.log(longestOutput);
  