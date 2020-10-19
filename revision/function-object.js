debugger;
const sum = new Function('a', 'b', 'return a+b');

console.log(sum(2, 6)); // 8

// ! Line Number: 2 Look Like
// (function anonymous(a, b) {
//     return a + b;
// });

// Syntax
// new Function([arg1 [, arg2 [, ...argN]] ,] functionBody)
