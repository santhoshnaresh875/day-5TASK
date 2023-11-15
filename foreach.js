//1) For the given JSON iterate over all for loops (for, for in, for of, forEach)
var jsonObject = {
    name: 'Sasi kumar',
    Age: '23'
};

for (var prop in jsonObject) {
console.log("Key:" + prop);
console.log("Value:" + jsonObject[prop]);
}

const iterable = [10, 20, 30];

for (const value of iterable) {
console.log(value);
}

let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item) {
sum += item;
}