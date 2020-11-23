/* =================================================== */
/*	   			JavaScript Reference Boolean           */
/* =================================================== */

// Prototype - make new method for Boolean.
Boolean.prototype.myColor = function() {
	if (this.valueOf() === true) {
		return 'green';
	} else {
		return 'red';
	}
}

let a = false;
console.log(a.myColor());

// Convert Boolean TO String 
console.log(a.toString());

// valueOf() 
console.log(a.valueOf());
