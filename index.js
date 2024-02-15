let countEl = document.querySelector('#count-el')
let saveEl = document.querySelector('#save-el')
let countsSumEl = document.getElementById('count-sum-el')
let incrementBtn = document.querySelector('#increment-btn');
let saveBtn = document.querySelector('#save-btn');
let counts = [];

let count = 0;

countEl.textContent = count;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    saveEl.textContent += count + " - ";
    countEl.textContent = 0;
    counts.push(count);
    count = 0;
    countsSum = counts.reduce((acc, currVal) => acc + currVal, 0);
    countsSumEl.textContent = countsSum;
}



