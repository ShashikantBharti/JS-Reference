/* =================================================== */
/*	   			JavaScript Reference Classes           */
/* =================================================== */

class Car{
	constructor(brand) {
		this.brand = brand;
	}
	present() {
		return "I've a "+this.brand+" Car.";
	}
}

class Modal extends Car {
	constructor(brand,mod) {
		super(brand);
		this.mod = mod;
	}
	show(){
		return this.present() + ", It is a "+this.mod;
	}
}

let ford = new Car("Ford");
console.log(ford);
console.log(ford.present());

let mustang = new Modal('Mustang');
console.log(mustang);