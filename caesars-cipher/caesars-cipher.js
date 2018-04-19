function rot13(str) { // LBH QVQ VG!
 var deciphered = [];
 for(var i = 0; i < str.length; i++){
   var letter = str.charCodeAt(i);
   
   if (letter >= 65 && letter <= 77){
     letter += 13;
   } else if (letter >= 78 && letter <= 90){
     letter -= 13;
   }
   deciphered.push(String.fromCharCode(letter));
 }
 return deciphered.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");​