'use strict'

// Fetch existing tasks from localStorage
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
        //line 9 to 13 can be replaced one line below
        //that accomplish the same
        //return itemsJSON ? JSON.parse(itemsJSON) : [];
    } catch (e) {
        return [];
    }
}

// Save tasks to localStorage
const saveWarenkorb = (items) => {
    //write to browser storage
    localStorage.setItem('items', JSON.stringify(items));
}

// Remove task by id
const removeTask = (id) => {
    //find task by id
    const taskIndex = warenkorb
        .findIndex((task) => task.id === id);

    //remove task
    if (taskIndex > -1) {
        warenkorb.splice(taskIndex, 1);
    }
}

// Toggle the completed value for a given task
const toggleTask = (id) => {
    const task = warenkorb
        .find((task) => task.id === id);

    if (task) {
        task.completed = !task.completed;
    }
}

// Render application warenkorb
const renderWarenkorb = (warenkorb) => {
    document.querySelector('#warenkorb').innerHTML = '';

    warenkorb.forEach((item) => {
        document.querySelector('#warenkorb')
            .appendChild(generateWarenkorbDOM(item));
    })
}

// Get the DOM elements for an individual item
const generateWarenkorbDOM = (item) => {
    const itemEl = document.createElement('div');
    const itemText = document.createElement('span');
    const itemPrice = document.createElement('span');
    /* const removeButton = document.createElement('button'); */

    // Setup task checkbox
    /*checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = task.completed;
    taskEl.appendChild(checkbox);
    checkbox.addEventListener('change', () => {
        toggleTask(task.id);
        saveWarenkorb(warenkorb);
        renderWarenkorb(warenkorb);
    }) */

    // Setup the task text
    itemText.textContent = item.text;
    itemEl.appendChild(itemText);

    itemPrice.textContent = item.price;
    itemEl.appendChild(itemPrice);

    // Setup the remove button
    /*removeButton.textContent = 'x';
    taskEl.appendChild(removeButton);
    removeButton.addEventListener('click', () => {
        removeTask(task.id);
        saveWarenkorb(warenkorb);
        renderWarenkorb(warenkorb);
    }); */

    return itemEl;
}

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTasks) => {
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTasks.length} tasks left`;
    return summary;
}
