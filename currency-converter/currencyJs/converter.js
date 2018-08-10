'use strict';
const list = document.getElementsByTagName('select');
const result = document.getElementById('result');
const source = document.getElementById('source');
const from = document.getElementById('from');
const to = document.getElementById('to');

const hxr = new XMLHttpRequest();
hxr.open('GET', 'https://neto-api.herokuapp.com/currency', true); 
hxr.send();

function startLoad() {
  document.getElementById('loader').classList.remove('hidden')
};

function endLoad() {
  document.getElementById('loader').classList.add('hidden');
  document.getElementById('content').classList.remove('hidden');
};

function parse() {
  const currency = JSON.parse(hxr.responseText);
  for (let i = 0; i < currency.length; i++ ) {
    for (let select of list) {
      let option = document.createElement('option');
      select.appendChild(option);
      option.label = currency[i].code;
      option.value = currency[i].value;
      result.value = ((Number(from.value) * Number(source.value)) / Number(to.value)).toFixed(2);
    };
  };
};

function conversion() {
  result.value = ((Number(from.value) * Number(source.value)) / Number(to.value)).toFixed(2);
};

hxr.addEventListener('loadstart', startLoad);
hxr.addEventListener('loadend', endLoad);
hxr.addEventListener('load', parse);

for (const input of list) {
  input.addEventListener('input', conversion);
}

source.addEventListener('input', conversion);