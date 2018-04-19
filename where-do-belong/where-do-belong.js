function getIndexToIns(arr, num) {
	// Find my place in this sorted array.
	arr.push(num);
	arr.sort(function(a,b, num){
	  	return a-b;
	});
	return arr.indexOf(num);
}
getIndexToIns([2, 20, 10], 19);