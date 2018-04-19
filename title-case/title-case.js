
function titleCase(string){
	var array = string.toLowerCase().split(" ");
	for (var i = 0; i < array.length; i++) {
		array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
	}
	return array.join(" "); 
}
titleCase("The quick brown fox jumped over the lazy dog");

//Using map();
// using reduce();

//array[i].slice(1) >> this is the others letters in the words