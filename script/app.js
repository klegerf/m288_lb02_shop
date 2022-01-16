/**
 * Webapp with Pagination
 */

/**
 * Deklaration der Variablen
 */
let warenkorb = getSavedWarenkorb();
renderWarenkorb(warenkorb);
let index;
let artikel = undefined;

/**
 * Ausgabe zeigen
 */
function showUI() {
    //Identification
    let htmlObj = document.getElementById("beschrieb");
    htmlObj.innerHTML =
        `Farbe: ${artikel.farbe}<br>` +
        `Grösse: ${artikel.size}<br>` +
        `Beschrieb: ${artikel.beschreibung}<br>` +
        `Preis: ${artikel.preis}`;

    htmlObj = document.getElementById("bild");
    htmlObj.innerHTML =
        `<img src=${artikel.bild} alt="Artikelbild" width="100%">`;

    htmlObj = document.getElementById("titel");
    htmlObj.innerHTML =
        `${artikel.art}`;

    let addToCart = document.getElementById("add-to-cart");
    addToCart.addEventListener("click", addArticle);
}

/**
 * Event for a new item
 */
function addArticle() {
    //add new item to cart with push-method into JSON-object
    warenkorb.push({
        id: uuidv4(),
        text: `${artikel.art}`+ "\n",
        price: `${artikel.preis}`
    });

    //save tasks
    saveWarenkorb(warenkorb);
    //show tasks
    renderWarenkorb(warenkorb);
}




/**
 * Nächster Eintrag (Record) zeigen
 */
function showNext() {
    //Index aus dem Browser-Speicher lesen
    index = localStorage.getItem("index");
    //Testausgabe auf der Console
    console.log(index);
    //Falls der index nicht definiert ist ...
    if (index == undefined) {
        //... dann setze den index auf 0 (Anfang)
        index = 0;
    } else {
        //... sonst falls der index eins kleiner als das Maximum ist
        if (sortimentListe.length - 1 > index) {
            //... erhöhe den index um 1
            index++;
        }
    }
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    artikel = sortimentListe[index];
    //zeige den Eintrag
    showUI();
}

/**
 *  Vorhergehender Eintrag (Record) zeigen
 */
function showPrevious() {
    //Index aus dem Browser-Speicher lesen
    index = localStorage.getItem("index");
    //Testausgabe auf der Console
    console.log(index);
    //Falls der index nicht definiert ist ...
    if (index == undefined) {
        //... dann setze den index auf 0 (Anfang)
        index = 0;
    } else {
        //... sonst falls der index grösser als das Minimum ist
        if (index > 0) {
            //... vermindere den index um 1
            index--;
        }
    }
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    artikel = sortimentListe[index];
    //zeige den Eintrag
    showUI();
}

//start app
//Falls der index nicht definiert ist ...
if (artikel === undefined) {
    //... dann setze den index auf 0 (Anfang)
    index = 0;
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    artikel = sortimentListe[index];
    //zeige den Eintrag
    showUI();
}

