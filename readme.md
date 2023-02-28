<h1 align="center">IT4 Zadaci</h1>

### Uvod

U repozitoriju se nalaze zadaci za rješavanje zajedno sa njihovim testovima. Zadaci su pisani u Javascriptu i svi zadaci su kratki ali zahtjevaju određeno razumijevanje Javascripta i osnova programiranja.

Za odraditi ovaj zadatak morate imate instalirano: 
-   [Git](https://git-scm.com/)
-   [Node](https://nodejs.org/en/)
-   [Visual Studio Code](https://code.visualstudio.com/)


### Struktura repozitorija

Svaki zadatak ima svoj folder i u njemu se nalazi zadatak (index.js) i njegov test (index.test.js). 

```ascii
├── digits-sum/
│   ├── index.js
│   └── index.test.js
│   ...
|
├── likes/
│   ├── index.js
│   └── index.test.js
│   ...
```

### Upute

Tekst svakog zadatka nalazi se u njemu odgovarajućem index.js file-u u obliku komentara. 

1.  Klonirajte ovaj repozitorij

```bash
git clone https://github.com/it4git/praksa-zadaci.git
```
2.  Prebacite se u klonirani folder ili ga otvorite sa Visual Studio Code-om i pokrenite npm install iz terminala kako bi se instalirali svi potrebni paketi za pokretanje i testiranje zadataka.

```bash
cd praksa-zadaci
npm install
```
3.  Otvorite neki od zadataka (npr repeater/index.js) i napišite funkciju iz zadatka između bloka RJEŠENJE ZADATKA. Skriptu u kojoj rješavate zadatak možete pokrenuti naredbom ```node repeater/index.js ``` ili samo ```node index.js ``` ako vam je trenutna putanja postavljena na folder od pripadajućeg zadatka.

4.  Kako bi bili sigurni da ste pokrili sve slučajeve koji se traže od Vas u zadacima, kreirani su testovi za svaki. Rješenje je validno samo ako prolazi test koji dolazi uz svaki zadatak.

    Testove pokrećete sa naredbom ```npm run test {naziv-zadatka}```

Primjer:
```bash
npm run test repeater
```
Nakon pokretanja ove naredbe trebali bi u terminalu vidjeti sljedeće:
```bash
> it4-praksa@1.0.0 test C:\Users\username\praksa-zadaci
> jest "repeater"

 PASS  repeater/index.test.js
  √ Test 1 (1 ms)
  √ Test 2
  √ Test 3

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.364 s, estimated 1 s
```
Ukoliko svi testovi prođu znači da ste uspješno riješili zadatak i možete krenuti na sljedeći.

Kad riješite zadatke kreirajte prazni repozitorij na svojem Githubu a zatim ovaj folder stavite u svoj repozitorij te se javite na mail sa linkom na Vaš Github profil sa riješenim zadacima.


IT4 d.o.o Orašje  - **[`IT4`](https://it4.ltd)**
