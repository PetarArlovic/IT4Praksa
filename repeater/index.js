/*
  Opis:
     Napišite funkciju pod nazivom repeater() koja uzima dva argumenta (string i broj) i vraća novi string gdje se ulazni string ponavlja toliko puta.
   primjeri:
     repeater("a", 5) bi trebao vratiti "aaaaa"
     repeater("xyz", 3) bi trebao vratiti "xyzxyzxyz"

*/

//----------------RJEŠENJE ZADATAKA ------------

function repeater(string, broj) {
  if(broj < 0) 
    return "";
  if(broj === 1) 
    return string;
  else 
    return string + repeater(string, broj - 1);
}

//---------------------------------------------------
// Function Export
module.exports = repeater