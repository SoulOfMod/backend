// ex1

console.log("Hello World !");

// ex2

var test = "My name is Lucas";
console.log(test);

//ex3

var name = "Lucas";
console.log("Nice to meet you " + name);

//ex4

var testlenght = "I'm very long";
console.log(testlenght.length);

//ex5

var food = "croissant is meh";
food = food.replace("meh", "so good");
console.log(food);

//ex6

var basic = "This is cool";
basicup = basic.toUpperCase();
basicdown = basic.toLowerCase();

console.log(basic + " " + basicup + " " + basicdown);

//ex7

word = "banana";
letter = word.split("");
console.log(letter);

//ex8

age = 23;
template = `I'm age ${age} years old`;
console.log(template);

var changed = "bonjour";
changed = changed.replace(/o/g, 'a')
console.log(changed)