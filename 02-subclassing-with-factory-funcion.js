// Subclassing Solution 2 ---------------

//using new & this keyword in prototype -------------
function userCreater(name, score) {
	const newUser = Object.create(userFuncions);
	newUser.name = name;
	newUser.score = score;
	return newUser;
}

const userFuncions = {
	sayName: function() { console.log("I'm " + this.name); },
	increment: function() { this.score++; },
}

const user1 = userCreater("Phill", 4);
const user2 = userCreater("Julia", 5);

user1.increment();

function paidUserCreator(paidName, paidScore, accountBalance) {
	const newPaidUser = userCreater(paidName, paidScore);
	Object.setPrototypeOf(newPaidUser, paidUserFunctions);
	newPaidUser.accountBalance = accountBalance;
	return newPaidUser;
}

const paidUserFunctions = {
	increaseBalance : function () {
		this.accountBalance++;
	}
}

Object.setPrototypeOf(paidUserFunctions, userFuncions);

const paidUser1 = paidUserCreator("Alyssa", 8, 25);
paidUser1.increaseBalance();
paidUser1.sayName();





// ----------------------------------------------
// Interlude - We have another way of running a function that allow us to control the assignment of this 
const obj = {
	num: 3,
	increment: function() {this.num++;}
}

const otherObj = {
	num: 10
}

obj.increment(); // obj.num now 4

obj.increment.call(otherObj); // obj.num now 11
/*
how to find call method
obj
	-> increment
	-> __proto__ property inside of combo function 

		-> Function object in which prototype property

			-> call method inside of prototype
			-> apply method inside of prototype
*/


obj.increment.apply(otherObj);












// Subclassing Solution 3 new kyeword  -------------------------

//using new & this keyword in prototype -------------
function userCreator(name, score) {
	this.name = name;
	this.score = score;
}

userCreator.prototype.sayName = function() {
	console.log("I'm " + this.name);
}
userCreator.prototype.increment = function() {
	this.score++;
}

const user1 = new userCreator("Phill", 4);
const user2 = new userCreator("Julia", 5);

user1.increment();

function paidUserCreator(paidName, paidScore, accountBalance) {
	userCreator.call(this, paidName, paidScore);
	this.accountBalance = accountBalance;

	// ----------
	// const newPaidUser = userCreator(paidName, paidScore);
	// Object.setPrototypeOf(newPaidUser, paidUserFunctions);
	// newPaidUser.accountBalance = accountBalance;
	// return newPaidUser;
}

paidUserCreator.prototype = Object.create(userCreator.prototype)

paidUserCreator.prototype.increaseBalance =function () {
	this.accountBalance++;
}

// Object.setPrototypeOf(paidUserFunctions, userFuncions);  // this is same work line 30


const paidUser1 = new paidUserCreator("Alyssa", 8, 25);
paidUser1.increaseBalance();
paidUser1.sayName();













// Subclassing Solution 4 class keyword ------------------------

class userCreater {
	constructor (name, score) {
		this.name = name;
		this.score = score;
	}
	sayName() {
		console.log("I'm " + this.name)
	};
	increment = function() {
		this.score++;
	}; 
}


const user1 = new userCreater("Phill", 4);
const user2 = new userCreater("Timm", 4);
// create obj, set __proto__, return label this obj
user1.increment();

// ..

class paidUserCreator extends userCreater {
	constructor(paidName, paidScore, accountBalance) {
		super(paidName, paidScore);
		this.accountBalance = accountBalance;
	}
	increaseBalance() {
		this.accountBalance++;
	};
}



const paidUser1 = new paidUserCreator("Alyssa", 8, 25);

paidUser1.increaseBalance();

paidUser1.sayName();  // "I'm Alyssa" 