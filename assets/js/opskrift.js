//Vælger de relevante HTML elementer
let inputFieldEl = document.querySelector('#input');
let plusButtonEl = document.querySelector('#plus');
let minusButtonEl = document.querySelector('#minus');

//Lægger 1 til når man trykker på +
plusButtonEl.addEventListener('click', () => {
  inputFieldEl.value = Number(inputFieldEl.value) + 1;
});

//trækker 1 fra når man trykker på - 
minusButtonEl.addEventListener('click', () => {
  inputFieldEl.value = Number(inputFieldEl.value) - 1;
});