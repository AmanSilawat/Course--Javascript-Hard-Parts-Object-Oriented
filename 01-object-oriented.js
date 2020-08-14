

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
	const newUser = Object.create(userFuncionStore);
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
	const newUser = Object.create(userFuncionStore);
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
	//2. set the __proto__
	//2. return the new user objcet

const user2 = new userCreater("Julia", 5);
//"new"-automate 2 things
	//1. create a newuser object
	//2. set the __proto__
	//2. return the new user objcet

user1.increment();








// COMBO = FUNCTION + OBJECT
function multiplyBy2(num) {
	return num*2;
}

multiplyBy2.stored = 5;
multiplyBy2(3) //6

multiplyBy2.stored; //5
multiplyBy2.prototype; //{} this is a regular property on the function in its object format.

// multiplyBy2 is a combo of function and object





// use protype
function UserCreator(name, score) {
	this.name = name;
	this.score = score;
}

UserCreator.prototype.increment = function() {
	this.score++;
}
UserCreator.prototype.login = function() {
	this.log("login");
}

const user1 = new UserCreator("Eva", 9);
user1.increment();

//Benifit
	//fast to write
	//still typical practice in professional code







// use protype
function UserCreator(name, score) {
	this.name = name;
	this.score = score;
}

UserCreator.prototype.increment = function() {
	function add1() {
		this.score++; // object ke LHS before dot notation not found any object and then "this" is refer to window object.
	}
	add1();
}
UserCreator.prototype.login = function() {
	this.log("login");
}

const user1 = new UserCreator("Eva", 9);
user1.increment();









// use protype
function UserCreator(name, score) {
	this.name = name;
	this.score = score;
}

UserCreator.prototype.increment = function() {
	const add1 = () => { this.score++; } //this is refer to parent side which object is called this method 
	// 
	add1();
}
UserCreator.prototype.login = function() {
	this.log("login");
}

const user1 = new UserCreator("Eva", 9);
user1.increment();








// class
//--------------------------------------------------
function UserCreator(name, score) {             // |
	this.name = name;						    // |
	this.score = score;                         // |
}												// |
//--------------------------------------------------
//constructor bit sapratly - shared method
//the class is syntactic sugar :
	//means nothing has changed under the hood.

												// |
UserCreator.prototype.increment = function() {  // |
	this.score++;								// |
}												// |
UserCreator.prototype.login = function() {		// |
	this.log("login");							// |
} 												// |

const user1 = new UserCreator("Eva", 9);
user1.increment();


//
//			     |--|
//			     |  |
//			     |  |
//			     |__|
//			    \    /
//			     \  /
//			      \/


// class
//--------------------------------------------------
function UserCreator(name, score) {             // |
	this.name = name;						    // |
	this.score = score;                         // |
}												// |
//--------------------------------------------------
//constructor bit sapratly - shared method
//the class is syntactic sugar :
	//means nothing has changed under the hood.

												// |
UserCreator.prototype.increment = function() {  // |
	this.score++;								// |
}												// |
UserCreator.prototype.login = function() {		// |
	this.log("login");							// |
} 												// |

const user1 = new UserCreator("Eva", 9);
user1.increment();

// Emerging as a new standard
// feels more like style of other languages(e.g. Python)








// javascritp object link to the proto and
// inside of __proto__ defalt bounch of functionality
const obj = {
	num: 3
}

obj.num //3
obj.hasOwnProperty("num")  //where this method

// how to find hasOwnProperty
	// -> obj
	// -> __proto__
	// -> Object
	// -> prototype
	// -> hasOwnProperty 

Object.prototype // hasOwnProperty: FUNCTION








// VIDEO LATCHER NAME : Function.prototype and Array.prototype
function multiplyBy2(num) {
	return num*2
}

multiplyBy2.toString() // find in global

// how to find toSting method
	// -> look into function + object combo (this fun. is object form)
	// -> Inside which proto object will be found
	// -> __proto__ is linked to the prototype methods
	// -> some method inside of the prototype
		// -> toString()
		// -> call()
		// -> bind()
		// -> apply()

Function.prototype //{toString: FUNCTION, call: FUNCTION, bind: FUNCTION}


multiplyBy2.hasOwnProperty("score");
// how to find toSting method
	// -> look into function + object combo (this fun. is object form)
	// -> Inside which proto object will be found
	// -> __proto__ is linked to the prototype methods
	// -> some method inside of the prototype
		// -> toString()
		// -> call()
		// -> bind()
		// -> apply()
		// -> __proto__ : linked to another Prototype Object 
			// -> hasOwnProperty()
			// -> __proto__ : NULL


Function.prototype.__proto__ //Object.prototype {hasOwnProperty: FUNCTION}


