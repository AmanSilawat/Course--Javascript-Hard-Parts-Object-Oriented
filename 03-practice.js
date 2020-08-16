class userCreater {
	constructor (name, score) {
		this.name = name;
		this.score = score;
	}
	sayName() {
		console.log("I'm " + this.name)
	}
	increment = function() {
		this.score++;
	}
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
	}
}



const paidUser1 = new paidUserCreator("Alyssa", 8, 25);

paidUser1.increaseBalance();

paidUser1.sayName();  // "I'm Alyssa"