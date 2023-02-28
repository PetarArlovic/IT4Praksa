/*
   Opis:
     Za zadani skup brojeva, vratite inverz svakom od njih. Svaki pozitivan broj postaje negativan, a negativan postaje pozitivan.
   Primjeri:
     invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
     invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
     invert([]) == []
   Bilješke:
     Možete pretpostaviti da su sve vrijednosti u nizu cijeli brojevi.
*/

//----------------RJEŠENJE ZADATAKA ------------

function invert(niz) {
  let invert = [];
  for(let i = 0; i < niz.length; i++){
    if(niz[i] > 0){
      invert.push(niz[i] - (niz[i] * 2));
    }
    
    if(niz[i] < 0){
      invert.push(Math.abs(niz[i]));
    }

    if(niz[i] == 0){
      invert.push(0);
    }
  }
  return invert;
}

//---------------------------------------------------

// Function Export
module.exports = invert