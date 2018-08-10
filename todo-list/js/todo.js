'use strict';
const listBlock = document.querySelector('.list-block');
const checkBox = document.querySelectorAll('input');
const output = document.querySelector('output');
const h3 = document.getElementById('h3');
let counter = 0;


function value() {
	output.value = `${counter} из ${checkBox.length}`;
};
function todo() {
	this.checked ? ++counter : --counter; 
	counter === 4 ? listBlock.classList.add('complete') :  listBlock.classList.remove('complete');
	value();	
};
for (const key of checkBox) {
	key.addEventListener('click', todo);
	key.checked = false;
	
	if (key.checked) {
		++counter;
	};
	value();
};


