/* =================================================== */
/*	   			JavaScript Reference Date              */
/* =================================================== */
// Date Constructor

let today = new Date();
console.log(today);

// getDate();
console.log(today.getDate());

// getDay();
console.log(today.getDay());
let weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log(weekDays[today.getDay()]);

// getFullYear();
console.log(today.getFullYear());

// gethours();
console.log(today.getHours());

// getMinutes();
console.log(today.getMinutes());

// getSeconds();
console.log(today.getSeconds());

// getMilliseconds();
console.log(today.getMilliseconds());

// getMonth();
console.log(today.getMonth());
let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
console.log(months[today.getMonth()]);

// getTime();
console.log(today.getTime()); // It returns number of milliseconds

// getTimezoneOffset();
console.log(today.getTimezoneOffset());

// getUTCDate(); 
console.log(today.getUTCDate());

// getUTCDay();
console.log(today.getUTCDay());

// getUTCFullYear();
console.log(today.getUTCFullYear());

// getUTCHours();
console.log(today.getUTCHours());

// getUTCMilliseconds();
console.log(today.getUTCMilliseconds());

// getUTCMinutes();
console.log(today.getUTCMinutes());

// getUTCSeconds();
console.log(today.getUTCSeconds());

// getUTCMonths();
console.log(today.getUTCMonth());

// now();
console.log(Date.now());

// parse();
console.log(Date.parse('12-03-2020')); //Return the number of milliseconds between January 1, 1970 and 12-03-2020.

// prototype 
Date.prototype.myMonth = function(){
	if(this.getMonth() == 0) {return "January";}
	if(this.getMonth() == 1) {return "February";}
	if(this.getMonth() == 2) {return "March";}
	if(this.getMonth() == 3) {return "April";}
	if(this.getMonth() == 4) {return "May";}
	if(this.getMonth() == 5) {return "June";}
	if(this.getMonth() == 6) {return "July";}
	if(this.getMonth() == 7) {return "August";}
	if(this.getMonth() == 8) {return "September";}
	if(this.getMonth() == 9) {return "October";}
	if(this.getMonth() == 10) {return "November";}
	if(this.getMonth() == 11) {return "December";}
}


let d = new Date();
console.log(today.myMonth());

// setDate(); This will set Day
today.setDate(12);
console.log(today.getDate());

// setMonth();
today.setMonth(4);
console.log(today.myMonth());

// setFullYear(); 
today.setFullYear(2020);
console.log(today.getFullYear());

// setHours(hour, min, sec, millisec); 
today.setHours(12, 34, 36, 234);
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getMilliseconds());

// setMinutes()
// setSeconds()
// setMilliseconds();

