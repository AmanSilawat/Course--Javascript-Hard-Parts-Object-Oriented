

const user2 = {}; // object literal
const user3 = Object.create(null); // object

user2.name = "julia";
user2.score = 3;
user2.increment = function() {
	user2.score++;
};

user3.name = "Eva";
user3.score = 9;
user3.increment = function() {
	user3.score++;
};





//  Remember DRY principle -------------
function userCreater(name, score) {
	const newUser = {};
	newUser.name = name;
	newUser.score = score;
	newUser.increment = function() {
		newUser.score++;
	}
	return newUser;
}

//const user1 = // this is uninitialized until get the return value from calling funtion
const user1 = userCreater("Phill", 4)  //create execution context 
const user2 = userCreater("Julia", 5)
user1.increment();





//  prototype chain -------------
function userCreater(name, score) {
	const newUser = Object.create();
	newUser.name = name;
	newUser.score = score;
	return newUser;
}

const userFuncionStore = {
	increment: function() { this.score++; },
	login: function() { console.log("You're loggedin"); },
}

const user1 = userCreater("Phill", 4);
const user2 = userCreater("Julia", 5);
user1.increment();
//increment method find in userCreater
	///not found in 
		//then find inside of --proto-- hidden feature 
			//this prototypl feature








//using new & this keyword in prototype -------------
function userCreater(name, score) {
	const newUser = Object.create();
	newUser.name = name;
	newUser.score = score;
	return newUser;
}

const userFuncionStore = {
	increment: function() { this.score++; },
	login: function() { console.log("You're loggedin"); },
}

const user1 = new userCreater("Phill", 4);
//"new"-automate 2 things
	//1. create a newuser object
	//2. return the new user objcet

const user2 = new userCreater("Julia", 5);
//"new"-automate 2 things
	//1. create a newuser object
	//2. return the new user objcet

user1.increment();








function multiplyBy2(num) {
	return num*2;
}

multiplyBy2.stored = 5;
multiplyBy2(3) //6

multiplyBy2.stored; //5
multiplyBy2.prototype; //{} this is a regular property on the function in its object format.

// multiplyBy2 is a combo of function and object