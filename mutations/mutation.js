function mutation(arr) {
  var secondArr = arr[1].toLowerCase();
  var firstArr = arr[0].toLowerCase();
  for (i=0;i<secondArr.length;i++) {
    if (firstArr.indexOf(secondArr[i]) === -1)
      return false;
  }
  return true;
 }

mutation(["hello", "hey"]);