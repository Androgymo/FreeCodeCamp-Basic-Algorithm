function palindromeCheck(string){
	var remove = /[\W_]/g;
	var str = string.toLowerCase().replace(remove,"")
	var reverseStr = str.split("").reverse("").join("");
	(str === reverseStr) ? true : false
}

palindromeCheck("A man, a plan, a canal. Panama");