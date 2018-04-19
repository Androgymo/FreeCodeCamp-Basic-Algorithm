function repeatStringNumTimes(str, num) {
  var repeatedString = "";
  while (num > 0) {
    repeatedString += str;
    num--;
  }
  return repeatedString;
}
repeatStringNumTimes("abc", 3);