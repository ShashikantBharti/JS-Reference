// JavaScript Array.

let cars1 = ['volvo','audi','jaguar','BMW','huandai'];
let cars2 = ['toyota','safari','lamborghini','ferrari'];
let cars3 = ['tata','nano','swift'];
 

// 1. array1.concat(array2,array3,array4,....,arrayN) method.
let cars = cars1.concat(cars2,cars3);
console.log(cars.constructor);

// 2. array1.copyWithin(target, start, end) method - copy first two elements into 3rd and 4rth place.
cars.copyWithin(2, 0, 2);
console.log(cars);

// 3. array1.every(currentValue, index, array1) method in javascript, It returns true or false.

let ages = [23, 24, 20, 25, 26];
let vowels = ['a','e','i','o','u','A','E','I','O','U'];
let survey = [
	{name:"Surya",anser:"Yes"},
	{name:"Raaz",anser:"Yes"},
	{name:"Shashikant",anser:"Yes"},
	{name:"Ambikesh",anser:"Yes"},
];
function checkAdult(age) {
	return age >= 18;
}

function isVowel(c) {
	return c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u' || c === 'A' || c === 'E' || c === 'I' || c === 'O' || c === 'U';
}

function isConsonant(c) {
	return c !== 'a' && c !== 'e' && c !== 'i' && c !== 'o' && c !== 'u' && c !== 'A' && c !== 'E' && c !== 'I' && c !== 'O' && c !== 'U';
}

function isSameAnser(el, index, arr) {
	if (index === 0) {
		return true;
	} else {
		return  (el.anser === arr[index-1].anser);
	}
}

function isAnserYes(el, index, arr) {
	if (el.anser == 'Yes')
		return true;
}

console.log(ages.every(checkAdult));
console.log(vowels.every(isVowel));
console.log(survey.every(isSameAnser));

// 4. array1.entries() method - return iterator as key/value pair.
let val = cars.entries();
console.log(val);
for(v of val) {
	console.log(v);
}

// 5. array1.fill(value) method - fill static value at all elements.
console.log(cars);
// cars.fill('jaguar');
console.log(cars);

// 6. array1.filter(somefunction) method - return all value that are true.
let str = 'a quick brown fox jumps over tha lazy dog';
str = str.split('');

console.log(str.filter(isVowel));
console.log(str.filter(isConsonant));
console.log(survey.filter(isAnserYes));

// 7. array1.find() method - returns first element matches condition.

console.log(ages.find(checkAdult));
console.log(survey.find(isAnserYes));

// 8. findIndex() method - returns index of first element matched condition.

console.log(ages.findIndex(checkAdult));
console.log(survey.findIndex(isAnserYes));

// 9. array1.forEach(function(item, index, array1){}) method - iterate each value.
ages.forEach(function(item, index) {
	console.log(index+":"+item);
});

// update age with 10x of its original ages
ages.forEach(function(item, index, arr){
	arr[index] = item*10;
});
console.log(ages);

// 10. from() method - create an array from a string.
let first_name = 'shashikant';
console.log(Array.from(first_name));

// 11. includes() method - check if array has 'element' returns true or false.
console.log(cars.includes('Rolls Roice'));

// 12. find indexOf(item, start) element in array.
console.log(cars.indexOf('ferrari'));

// 13. Array.isArray(object) check if object is an array.
console.log(Array.isArray(cars));

// 14. array.join(seperator) method convert array into string.
console.log(str.join(''));

// 15. array.keys() method return array iterator only keys of array.
let keys = cars.keys();
for (x of keys) {
	console.log(cars[x]);
}

// 16. array.length method returns length of array object.
console.log(cars.length);

// 17. array.lastIndexOf(item, start) returns position from last.
console.log(cars.lastIndexOf('volvo'));

// 18. array.map(function(el, index, arr)) method.
console.log(ages);
ages = ages.map(function(item, index, arr) {
	return item/10;
});
console.log(ages);

// 19. array.pop() remove last element from array.
console.log(cars);
console.log(cars.pop());
console.log(cars);

// 20. prototype method add new properties and method in array.
Array.prototype.myUcase = function() {
	for (i = 0; i < this.length; i++) {
		this[i] = this[i].toUpperCase();
	}
}

cars.myUcase();
console.log(cars);