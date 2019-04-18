const _ = require('lodash');

const NB_ELEM = 20000;

let testArray = [];
for (let i = 0; i < NB_ELEM; i++) {
	let value = Math.floor(Math.random() * 100);
	testArray[i] = { value, ok: value > 50 };
}

let value = 0;
let startV = process.hrtime();
testArray.filter((item) => item.ok).map((item) => value += item.value);
let endV = process.hrtime(startV);

value = 0;
let startL = process.hrtime();
_.chain(testArray).filter((item) => item.ok).map((item) => value += item.value);
let endL = process.hrtime(startL);

let timeV = endV[0] * 1000 + endV[1];
let timeL = endL[0] * 1000 + endL[1];

console.log(`${NB_ELEM}\nVanilla\t${timeV}\nLodash\t${timeL}`);

if(timeV > timeL) {
	console.log(`Lodash is ${Math.round(timeV / timeL)} times faster`);
} else {
	console.log(`Vanilla is ${Math.round(timeL / timeV)} times faster`);	
}