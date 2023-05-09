function checkLettersString(str) {
  let StrToArray = [];
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) == 32) {
      StrToArray[i] = "space";
    } else {
      StrToArray[i] = str.charAt(i);
    }
  }
  const Result = StrToArray.reduce((prev, letter) => {
    if (!prev[letter]) {
      prev[letter] = 1;
    } else {
      prev[letter] += 1;
    }
    return prev;
  }, []);
  return Result;
}
