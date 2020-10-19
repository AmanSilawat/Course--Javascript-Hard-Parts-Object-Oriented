// Create user Object
var user = {
    token: 5,
    increaseToken() {
        return this.token + 1;
    },
};

// increase user token
console.log(user.increaseToken()); // 6

// Inheriting object
let user2 = Object.create(user);


// increase another user token
user2.token = 20;
console.log(user2.increaseToken()); // 21