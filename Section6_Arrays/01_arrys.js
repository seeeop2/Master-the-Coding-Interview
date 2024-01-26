const strings = ["a", "b", "c", "d"];
const numbers = [1, 2, 3, 4, 5];

//push
strings.push("e"); //[ 'a', 'b', 'c', 'd', 'e' ]

//pop
strings.pop(); //[ 'a', 'b', 'c', 'd' ]

strings.pop(); //[ 'a', 'b', 'c' ]

//unshift
strings.unshift("x"); //[ 'x', 'a', 'b', 'c' ]

//splice
strings.splice(2, 0, "alien"); //[ 'x', 'a', 'alien', 'b', 'c' ]
console.log(strings);
