
// Using FOR loop and IF statement
function findLongestWord(string){
	var longestWord = 0;
	var array = string.split(" ");
	for(var i = 0; i < array.length; i++){
		if (array[i].length > longestWord){
			longestWord = array[i].length;
		}
	}	
	return longestWord;
}


//Using sort() Method
//Using forEach 
//using reduce()




findLongestWord("What if we try a super-long word such as otorhinolaryngology");
findLongestWord("The quick brown fox jumped over the lazy dog");