/*
  Opis:
     Pero se sprema proći test inteligencije. Najčešći zadatak u ovom testu je
     kako saznati koji se od zadanih brojeva razlikuje od ostalih.
     Pero je primijetio da se jedan broj obično razlikuje od ostalih po parnosti.
     Pomozite Peri — da provjeri svoje odgovore, potreban mu je program koji među
     zadanim brojevima pronalazi onaj koji se razlikuje po parnosti, i vrati poziciju tog broja.
   
   Primjeri:
     iqTest("2 4 7 8 10") => 3 // Treći broj je neparan, dok su ostali brojevi parni
     iqTest("1 2 1 1") => 2 // Drugi broj je paran, dok su ostali brojevi neparni
   
   Bilješke:
     Imajte na umu da je vaš zadatak pomoći Peri riješiti pravi IQ test,
     što znači da indeksi elemenata počinju od 1 (ne od 0)
  */

//----------------RJEŠENJE ZADATAKA ------------

function iqTest(numbers) {
  // Razdvajanje niza po razmacima i pretvaranje svakog elementa u broj
  const arr = numbers.split(' ').map(Number);
  // Inicijalizacija varijabli za brojanje parnih i neparnih brojeva
  let evenCount = 0;
  let oddCount = 0;
  let lastEven = 0;
  let lastOdd = 0;
  // Iteracija kroz niz i brojanje parnih i neparnih brojeva
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenCount++;
      lastEven = i + 1;
    } else {
      oddCount++;
      lastOdd = i + 1;
    }
  }
  // Provjera koji broj se razlikuje po parnosti
  if (evenCount === 1) {
    return lastEven;
  } else {
    return lastOdd;
  }
}

//---------------------------------------------------

// Function Export
module.exports = iqTest;
