function reverseStr(string) {
	var reversed = string.split("").reverse("").join("");
	return reversed;
};

reverseStr("Hello");
reverseStr("Greetings from Earth");