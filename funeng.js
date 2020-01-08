function engltomor(input){
  var letters = [ ' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var morseLetters = [ "\xa0\xa0\xa0\xa0", ". ___", "___ . . .", "___ . ___ .", "___ . .", ".", ". . ___ .", "___ ___ .", ". . . .", ". .", ". ___ ___ ___", "___ . ___", ". ___ . .",  "___ ___", "___ .", "___ ___ ___", ". ___ ___ .", "___ ___ . ___", ". ___ .", ". . .", "_", ". . ___", ". . . ___", ". ___ ___", "___ . . ___", "___ . ___ ___", "___ ___ . .", ". ___ ___ ___ ___" ];
var newin=""
    for(var i=0;i<input.length;i++){
      for (var j = 0; j < 26; j++) {
                 if (input[i].toLowerCase() == letters[j]) {
                      newin += morseLetters[j];
                      newin += "\xa0\xa0\xa0";
                      break;
                 }
  }
}
return newin
}
module.exports={engltomor}