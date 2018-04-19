function factorialize(num){
	if(num === 0){
		return 1;
	} else {
		return num * factorialize(num - 1);
	}
}
factorialize(10);
factorialize(4);
factorialize(1);