function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else if (num > 3){
    return (str.slice(0, num-3) + "...");
  } else if (num < 3){
    return (str.slice(0,num) + "...");  
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);