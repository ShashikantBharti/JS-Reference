// JavaScript Array.

let cars1 = ['volvo','audi','jaguar','BMW','huandai'];
let cars2 = ['toyota','safari','lamborghini','ferrari'];
let cars3 = ['tata','nano','swift'];


// 1. array1.concat(array2,array3,array4) method.
let cars = cars1.concat(cars2,cars3);
console.log(cars.constructor);

// 2. array1.copyWithin(target, start, end) method - copy first two elements into 3rd and 4rth place.
cars.copyWithin(3, 2, 3);
console.log(cars);

// 3. array1.every(currentValue, index, array1) method in javascript.

let ages = [23, 24, 20, 25, 26];
let vowels = ['a','e','i','o','u','A'];
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

function fun() {
	console.log(ages.every(checkAdult));
	console.log(vowels.every(isVowel));
	console.log(survey.every(isSameAnser));
}

fun();

// 4. array1.entries() method - return iterator as key/value pair.
let val = cars.entries();
console.log(val);
for(v of val) {
	console.log(v);
}

// 5. array1.fill(value) method - fill static value at all elements.
console.log(cars);
cars.fill('jaguar');
console.log(cars);

// 6. array1.filter(somefunction) method - return all value that are true.
let str = 'javascriptloops';
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