'use strict'

// Fetch existing Warenkorb from localStorage
const getSavedWarenkorb = () => {
    //read from browser storage
    const itemsJSON = localStorage.getItem('items');

    try {
        //if itemsJSON contains data
        if (itemsJSON){
            return JSON.parse(itemsJSON);
        } else {
            return [];
        }
    } catch (e) {
        return [];
    }
}

// Save Warenkorb to localStorage
const saveWarenkorb = (items) => {
    //write to browser storage
    localStorage.setItem('items', JSON.stringify(items));
}

// Remove item by id
const removeTask = (id) => {
    //find task by id
    const taskIndex = warenkorb
        .findIndex((task) => task.id === id);

    //remove task
    if (taskIndex > -1) {
        warenkorb.splice(taskIndex, 1);
    }
}

// Render application warenkorb
const renderWarenkorb = (warenkorb) => {
    document.querySelector('#warenkorb').innerHTML = '';

    document.querySelector('#summary').innerHTML = '';
    document.querySelector('#summary')
        .appendChild(generateSummaryDOM(warenkorb));


    warenkorb.forEach((item) => {
        document.querySelector('#warenkorb')
            .appendChild(generateWarenkorbDOM(item));
    })
}

// Get the DOM elements
const generateWarenkorbDOM = (item) => {
    const itemEl = document.createElement('div');
    const itemText = document.createElement('div');
    itemText.className = "warenkorb-bold";
    const itemPrice = document.createElement('span');
    const removeButton = document.createElement('button');
    removeButton.className = "remove-button";

    // Setup the item text
    itemText.textContent = item.text;
    itemEl.appendChild(itemText);

    // Setup the item price
    itemPrice.textContent = item.price;
    itemEl.appendChild(itemPrice);

    //Setup the remove button
    removeButton.textContent = 'x';
    itemEl.appendChild(removeButton);
    removeButton.addEventListener('click', () => {
        removeTask(item.id);
        saveWarenkorb(warenkorb);
        renderWarenkorb(warenkorb);
    });

    return itemEl;
}

// Get the DOM elements for Warenkorb summary
const generateSummaryDOM = (warenkorb) => {
    const summary = document.createElement('h4');
    summary.textContent = `${warenkorb.length} Artikel im Warenkorb`;
    return summary;
}

/*const generatePriceDOM = (warenkorb) => {
    const pricesummary = document.createElement('h4');
    pricesummary.textContent = `${warenkorb.length} CHF;
    return pricesummary;
} */