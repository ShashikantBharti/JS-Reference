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

let ages = [23, 24, 20, 25, 26, 100, 200, 35];
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
Array.prototype.myLcase = function() {
	for (i = 0; i < this.length; i++) {
		this[i] = this[i].toLowerCase();
	}
}

cars.myUcase();
console.log(cars);
cars.myLcase();
console.log(cars);

// 21. array.push(item1, item2, item3, ......., itemX) method add element to the last of the array;
cars.push('mercedese','rolls roice');
console.log(cars);

// 22. array.reduce(function(total, item, index, arr){}) method reduces array to a single value (Left To Right).
function sum(total, item){
	return total+item;
}
console.log(ages.reduce(sum));

// 22. array.reduceRight(function(total, item, index, arr){}) method reduces array to a single value (Right To Left).
console.log(ages.reduceRight(sum));


// 23. array.reverse() reverse the order of element in array.
console.log(cars);
cars.reverse();
console.log(cars);

// 24. array.shift() method remove first item from array.
let item = cars.shift();
console.log(item);
console.log(cars);

// 25. slice() method is used to select items in array but not remove from original array.
let somecars = cars.slice(1,5);
console.log(somecars);
somecars = cars.slice(-5,-1);
console.log(somecars);

// 26. array.some(function(item, index, arr)) return if any element matches condition;
console.log(ages.some(checkAdult));

// 27. array.sort() method sort array in ASC or DESC order but for numbers it produces wrong output So use compare function.
console.log(ages.sort(function(x,y){ 
	return x-y; // Ascending Order
}));
console.log(ages.sort(function(x,y){
	return y-x; // Descending Order
}));

// 28. array.splice(index, howmany, item1, item2, ......, itemX) method add/remove element from array.
console.log(cars);
cars.splice(2,0,'range rover','safari'); // Add item at index 2.
console.log(cars);
somecars = cars.splice(2,1,'aventador'); // remove 1 element from index 2 and add 1 element.
console.log(somecars);
console.log(cars);
somecars = cars.splice(2,4); // remove 4 element from 2nd position.
console.log(somecars);
console.log(cars);

// 29. array.toString() method convert an array to string.
console.log(cars.toString());

// 30. array.unshift(item1, item2, item3, ... , itemX) method add new element at beginning.
somecars.forEach(function(item, index) {
	cars.unshift(item);
});
console.log(cars);

// 31. array.valueOf() method return same array.
somecars = cars.valueOf();
console.log(somecars);