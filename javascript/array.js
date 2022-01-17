'use strict';

// Array

// 1. Declaration(선언)
const arr1 = new Array();
const fruits = ['apple', 'banana', 'orange'];


// 2. Indexing
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[3]);     // undefined


// 3. Looping over an array
for(let i=0; i< fruits.length; i++)
{
    console.log(fruits[i]);
}

for(let fruit of fruits) {
    console.log(fruit);
}

fruits.forEach(function (fruit, index) {  // forEach : API. 콜백함수를 받아옴.
    console.log(fruit, index);
})                 

fruits.forEach((fruit, index) => console.log(fruit, index));

fruits.forEach((fruit) => console.log(fruit));


// 4. Add, delete, copy
// push : add ad item to the end
fruits.push('berry', 'peach');

// pop: remove an item from the end
fruits.pop();

// unshift: add in beginning
fruits.unshift('lemon');

// shift: remove in beginning
fruits.shift();

console.log(fruits);

// Note! shift, unshift are slower than pop, push.
// 나머지 다 당겨오거나 밀어야되기 때문. O(n)

// splice : remove item by index position
//fruits.splice(2);       // 인덱스 2부터 다 지움.
console.log(fruits);

fruits.splice(2,1);       // 인덱스 2부터 1개를 지움.
console.log(fruits);

fruits.splice(2,1, 'melon', 'pear');       // 지우고 그 자리에 이것들 넣음. 
console.log(fruits);

// combine two arrays
const fruits2 = ['tomato', 'carrot'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. Searching
console.log(fruits.indexOf('banana'));
console.log(fruits.includes('banana'));

