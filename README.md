## General notes

Git hub repo: 
https://github.com/iamshaunjp/modern-javascript

## JavaScript Basics

### Variables

`let` -> create a variable which is able to be changed on the future
`const` -> create a constant variable, which is CAN NOT BE CHANGED on the future
`var` -> it is an old way to create variable, not in moder java script. 

It is used camelCase to createVariables. youGetIt?. 
They can never start with a number 5ages WRONG x5ages GOOD

### Data types

* Number; they can be doubles or integers, you know the stuff. 
* String; 'whatever you want in strings'
* Boolean; true / false
* NUll; Explicitly set a value with no value
* Undifined; For variables that have not yet been defined
* Object; Complex data structures - Arrays, Dates, Literls (what is that), etc,...
* Symbol; Used with objects. 

### Strings

- Strings
````javascript
console.log('Hello World');

let email = 'whatever@email.com;
````

- Strings concatenation 
```javascript
let firstString = 'Brandon';
let secondString = 'Sanderson';

let fullName = firstName + ' ' + lastName; 
```

- Getting characters
```javascript
fullName[2];
```

- string length 
```javascript
fullName.length();
```

- string methods
```javascript
fullName.toUpperCase();

let result = fullName.toLowerCase();

let index = email.indexOf('@'); // it is going to find the position of a certain character on a specific string, it will retunr an integer
```

#### Common string methods

Note; methods are just functions that belongs to specific objects or object types

```javascript
let email = 'whatever@email.com';

// will find the position of the last character specified
let result = email.lastIndexOf('t');

// slice a section of the string
let result = email.slice(0, 4); // you slice from the position from 0 to 10, so 'whate'

// get a substring of a string, the differnece with slice is that you specified how many characters you want to go along
let results = email.substr(4, 10); 

// replace a character from another character
let results = email.replace('w', 'm');
let results = email.replace('a', 'b'); // it only replace the first a on the string, not all of them 
```

### Numbers

```javascript
let radius = 10;
const pi = 3.14; 

// console.log(radius, pi); 
// math operators: +, -, *, /, **,...
let likes = 10; 
likes = likes + 1; 
likes ++;  // that's the same than the previous operation
likes --; // that takes 1
likes += 10; // takes the current value and add 10
likes -= 5; // takes away 5
likes *= 2; // multiply by two
likes /= 2; // Devided by two 

// NaN - not a number 

// to combine number and strings you should
let result = 'whatever string is ' + likes + ' bigger than other'; 

```

#### Comining number and strings

```javascript
const title = 'Best reads of 2019';
const author = 'Mario';
const likes = '30';

// concationatio way
let result = 'jkewhrkjwhr e ' + title + ' sdhfjksdh kdsf ' + author ' jdshf weuyr ' + likes + ' siupoiqw.';

// template string way
let result = 'The blog called ${title} by ${author} has ${likes} likes.'; 

// creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span> This blog has ${likes} likes </span>
`; 
```

### Arrays

Store collection of things inside them: 

```javascript
let ninjas = ['shaun', 'ryu', 'chun-li'];

// remember javascript is a 0 based language

// of you want to overwrite a position 
ninjas[1] = 'ninja'; 

// store numbers
let ages = [20, 25, 30, 35]; 

// we can store numbers and sttrings
let agesNames = [10, 'Non' 34, 'Wang'];
```

Array methods; 

```javascript
let result = ninjas.join(','); // it will join all the values on the array by the speficied value

let result = ninjas.indexOf('chun-li'); // find the position of the specified string

let result = ninjas.concat(['ken', 'crystal']); // join things together, 

let result = ninjas.push('ken'); // push a new value into the array, it alters teh original value

let result = ninjas.pop(); // it pop off the last value of the array, and it returns that value
```

### NULL and Undifined

Null; intentional lack of value
Undifined; not intentional 

```javascript
let age; 
console.log(age, age + 3, 'the age is ${age}');

// null 
let age = null; 
console.log(age, age + 3, 'the age is ${age}');
```

### Booleans & Comparisons

```javascript
// booleans & comparisons
console.log("true", "false", true, false); 

// methods can return booleans
let email = 'whatever@email.com';
let names = ['maro', 'luigi', 'toad'];

let results = email.includes('@');  // Check if an specific character is on the string
let results = names.includes('luigi'); // check if a value is inside an array

// comparison booleans
let age = 25; 

age == 25; // will evaluate if something is true or false
age != 30; // check if something is NOT equal 
age > 20; // greater than
```

#### Loose vs Comparisons

```javascript
let age = 25; 

// loose comparison (different types can still be equal) 
age == 25; 
age == '25'; // this will return true, even if there are different types. THis is happening because javascript is changing the datatypes 

// strict comparisons (different types cannot be equal)
age === 25; // strict comparison it would be true
age === '25'; // that would be false, as we are using a strict comparison
age !== 25; // that would be false, as the numbers are not equal
age !== '25'; // that would be true, as it is true that are different data types
```

### Type conversions

Explicit type conversion

```javascript
let score = '100';

// That would now work, as it is not going to sum the values
score + 1;

// that would be the way
score = Number(score); 

// if you want to check the data type
typeof score

// transform to strings
let results = String(50);

// transform to booleans
let results = Boolean(0); // False
let results = Boolean('0'); // Strings are always true
```

Implicit conversion is done inside javascript, as we mentioned before on Loose vs comparisons

## Control Flow Basics

### For Loops

```javascript
// loop
for(let i = 0; i < 5; i++){

}
```

Using length of values: 
```javascript
const names = ['a','b','c']

for (let i = 0; i < names.length; i++){
    console.log(names[i])
    let html = `<div>${names[i]}</div>`;
    console.log(html)
}
```

### White loops

```javascript
while(i < 5){
    i++; 
}
```

```javascript
names = ['a','b','c']
let i = 0; 
while(i < names.length){
    i++;
}
```

#### Do while loop

```javascript
let i = 5; 
// do the code regardless the condition, so it will run even if the condition is not true
do {
    console.log('val of i is: ', i);
    i++; 
} while (i < 5); 
```

### IF statements

```javascript
const age = 20; 

if(age > 20){
    console.log('If you are over 20');
}
```

```javascript
const list = ['a','b','c','d']

if(ninjas.length > 3) {
    console.log('A big list!')
}
```

```javascript
const password = 'pass';

if (password.length >= 8){
    console.log('Not a very long statement');
}
```

### Else statement

```javascript
const  password = 'pass';

if (password.legth >= 8){
    console.log('Not a very long statement');
} else if(password.includes('@')) {
    console.log('whatever message'); 
} else { 
    console.log('Even smaller password!');
}
```

### Logical Operators

Logical operators - OR || and AND &&

```javascript
const  password = 'pass';

if (password.legth >= 8 && password.includes('@')){
    console.log('Not a very long statement');
} else if(whatever condition) {
    console.log('whatever message'); 
} else { 
    console.log('Even smaller password!');
}
```

Logical NOT (!)

### Break & Continue

```javascript
const scores = [50, 25, 0, 30, 100, 20, 10]

for (let i = 0; i < scores.length; i++){

    if (scores[i] === 0){
        continue; // I want you to ignore the rest of the iteration, and go to the next iteration 
    }
    
    console.log('your score', scores[i]);

    if (scores[i] === 100){ 
        console.log('You get the top score'); 
        break; // I want to break the loop 
    }
}
```

### Switch statements

It is done when we want to check multiple single variable; 

```javascript
const grade = 'D'; 

// switch statement. Note they work like ===, so theu are strict
switch(grade){
    case 'A': 
        console.log('You got an A');
        break; // avoid keep in running the code besides is true the statemnt 
    case 'B': 
        console.log('You got an A'); 
        break; 
    case 'C': 
        console.log('You got an A'); 
        break;
    case 'D': 
        console.log('You got an A');
        break;
    default: 
        console.log('no valid grade'); 

}

// if statement
if (grade === 'A'){

} else if ( grade === 'B'){

} else if ( grade === 'C'){
    
} else if ( grade === 'D'){

} else if ( grade === 'E'){

}
```

### Variables and block scope

```javascript
let age = 30; 


if (true) { 
    age = 40; 
    console.log('inside the 1st code block; ', age);

}

console.log('outside code block; ', age);
```

## Functions & Method 

```javascript
// function declaration
function greet(){
    console.log('hi'); 
}
greet();

// function expression, we store a function inside a variable 
const speak = function(){
    console.log('a bigger text');
}; // semicolo because it is an expression 
speak();
```

The difference is that a function declaration it is run at the begining, so, the following code will work: 

```javascript
greet();

// function declaration
function greet(){
    console.log('hi'); 
}
```

### Arguments and parameters

```javascript
const speak = function(name = 'Luigi', time = 'Night'){
    console.log(`a bigger text with ${name}, in the ${time}`);
}; 
speak('whatever name', 'morning');
```

### Returning values 

```javascript
const calcArea = function(radius){
    return 3.14 * radius**2; 
}
const area = calcArea(5);
console.log(area);
```

### Arrow functions

```javascript
// regular function
const calcArea = function(radius){
    return 3.14 * radius**2; 
}

// arrow function
const calcArea = (radius) => {
    return 3.14 * radius**2; 
};
// that would be the same than
const calcArea = radius => 3.14 * radius**2;

const area = calcArea(5);
console.log(area);
```

Other example: 

```javascript
const greet = function(){
    return 'Hi everyone!';
};
// arrow function would be 
const greet = () => 'Hi everyone';
const result = greet(); 
console.log(result);
```

Other example: 

```javascript
// regular function
const bill = function(products, tax){
    let total = 0; 
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax; 
    }
    return total; 
}

// arrow function
const bill = (products, tax) => {
    let total = 0; 
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax; 
    }
    return total; 
};

const result = bill([10, 5, 3], 0.2)
console.log(result)
```

### Methods and functions

```javascript
const name = 'shaun';

// functions 
const greet = () => 'hello';
let resultOne = greet(); 
console.log(resultOne);

// methods
// The way we invoke them is different. 
let resultTwo = name.toUpperCase();
console.log(); 
```

#### Foreach Methods & Callbacks

A callback function is to pass a function as an argument inside a function. 

```javascript
// callback & foreach 

const myFunc = (callBackFunc) => {
    // do something 
    let value = 50; 
    callBackFunc(value); 
};

myFunc(value => {
    // do something
    console.log(value); 
}); 
```

An example with foreach:  

```javascript
let people = ['mario','luigi','ryu','shaun','chun-li'];

people.forEach(function(person){
    console.log(person); 
});
```

Now let's transform it to arrow function: 

```javascript
const logPerson = (person, index) => {
    console.log(`${index} - helo ${person}`)
};

people.forEach(logPerson);
```

Example: 

```javascript
const ul = document.querySelector('.people'); 

const people = ['mario','luigi', 'ryu', 'shaun', 'chun-li']; 

let html = ``;

people.forEach(person => {
    // create html template
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html); 
ul.innerHTML = html; // It helps to integreate the js code to html
```

## Objects

Javascripts objects have some things they can do. 

```javascript
// object literals
let user = {
    name: 'crystal',
    age: 30, 
    email: 'email@emal.com',
    location: 'berlin', 
    blogs: ['why mac & cheese rules', 'whatever text']
}; // We use {} to create an object in js

console.log(user);
console.log(user.name); // access to one of the values

user.age = 35; 
console.log(user.age); 

console.log(user['name']);

console.log(typeof user); // you will see is an object
```

### Adding methods to objects

```javascript
// object literals
let user = {
    name: 'crystal',
    age: 30, 
    email: 'email@emal.com',
    location: 'berlin', 
    blogs: ['why mac & cheese rules', 'whatever text'], 
    login(){
        console.log('the user logged in'); 
    }, 
    logout(){ 
        console.log('the user is logged out'); 
    },
    // create a methods prints all the blogs.
    logBlogs(){
        // We will use `this` property, in that case represents the `user` object (name of the function)
        console.log('This user has written the following blogs:'); 
        this.blogs.forEach(blog => {
            console.log(blog); 
        }); 
    }
};

user.login(); 
// the preporty this here represents the global object, the DOM
console.log(this); 
```

### Arrays in objects

```javascript
// arrys in objects
//const blogs = [
//    { title : 'why mac & cheese rules', likes : 30 },
//    { title : 'whatever text', likes : 30 },
//];
//console.log(blogs); 

let user = {
    name: 'crystal',
    age: 30, 
    email: 'email@emal.com',
    location: 'berlin', 
    blogs: [
        { title : 'why mac & cheese rules', likes : 30 },
        { title : 'whatever text', likes : 30 }
    ], 
    login(){
        console.log('the user logged in'); 
    }, 
    logout(){ 
        console.log('the user is logged out'); 
    },
    // create a methods prints all the blogs.
    logBlogs(){
        // We will use `this` property, in that case represents the `user` object (name of the function)
        console.log('This user has written the following blogs:'); 
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes); 
        }); 
    }
};

user.login(); 
// the preporty this here represents the global object, the DOM
console.log(this); 
```

### Math objects

```javascript
console.log(Math);
console.log(Math.PI);
console.log(Math.E); 

// random numbers
consol.log(Math.random()); 
```

### Primitive vs Reference Type

Primitive types: are numbers and strigns, and boolens, .. all except the objects (arrays, ...)
Reference types: any kind of objects

```javascript
let scoreOne = 50; 
let scoreTwo = scoreOne; 

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`)
scoreOne = 100; 
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`)
// you can see it changes on but does not change for the other. That's because we are using a primitive type

// refernece values
const userOne = { name : 'ryu', age: 30 };
const userTwo = userOne; 

console.log(userOne, userTwo); 

userOne.name = 'chun-li'; 
console.log(userOne, userTwo); 
// in that case will change 
```

## Arrays methods

### Filter Method

It iterates an array and performs a check on each item of the array, inside a callback function.  

```javascript
const scores = [10, 30, 15, 25, 50, 40, 5];

// const filteredScores = scores.filter(() => {
    //     return score > 20; 
// })
// console.log(filteredScores); 

const users = [
    {name: 'shaun', premium: true},
  {name: 'yoshi', premium: false},
  {name: 'mario', premium: false},
  {name: 'chun-li', premium: true}
];

const premiumUsers = users.filter(user => user.premium);
console.log(premiumUsers);
```

### Map method

It iterates an array and updets its value, and pushes it into a new array. 

```javascript
onst prices = [20, 10, 30, 25, 15, 40, 80, 5];

const salePrices = prices.map(price => price / 2);
console.log(salePrices);
```

```javascript
const products = [
  {name: 'gold star', price: 20},
  {name: 'mushroom', price: 40},
  {name: 'green shells', price: 30},
  {name: 'banana skin', price: 10},
  {name: 'red shells', price: 50}
];

const saleProducts = products.map(product => {
  if(product.price > 30){
    return {name: product.name, price: product.price / 2}
  } else {
    return product;
  }
});

console.log(products, saleProducts);
```

### Reduce method

It return a single value based on the values we iterate through the array. It doesn't necessery returns an array. 

```javascript
const scores = [10, 20, 60, 40, 70, 90, 30];

const result = scores.reduce((acc, curr) => { // acc = acumulator, curr = current
    if(curr > 50){
        acc++;
    }
    return acc;
}, 0); // represents the inital value of the acumulator

console.log(result);
```

```javascript
const scores = [
    {player: 'mario', score: 50},
  {player: 'yoshi', score: 30},
  {player: 'mario', score: 70},
  {player: 'crystal', score: 60}
];

const marioTotal = scores.reduce((acc, curr) => {
    if(curr.player === 'mario'){
        acc += curr.score;
  }
  return acc;
}, 0);

console.log(marioTotal);

```

### Find method

Itereate an array, and as soon as it passes the value we are looking for, and it will NOT continue with the iteration and will return this value. 

```javascript
const scores = [10, 5, 0, 40, 60, 10, 20, 70];

const firstHighScore = scores.find(score => score > 50);
console.log(firstHighScore);
```

### Sort method

```javascript
// example 1 - sorting strings
const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

// names.sort(); // it will alter the original array. 
names.reverse(); // to put the latest letter of the alphabet at the bebing
console.log(names);

// example 2 - sorting numbers
const scores = [10, 50, 20, 5, 35, 70, 45]; 

// scores.sort(); // sort method will only look at the first number, not the whole number
// scores.reverse();
// the right one would be
scores.sort((a,b) => a - b);
console.log(scores);

// example 3 - sorting objects
const players = [
    {name: 'mario', score: 20},
    {name: 'luigi', score: 10},
    {name: 'chun-li', score: 50},
    {name: 'yoshi', score: 30},
    {name: 'shaun', score: 70}
];

// 1st solution
// players.sort((a,b) => {
    //     if(a.score > b.score){
        //         return -1;
//     } else if (b.score > a.score){
    //         return 1;
//     } else {
    //         return 0;
//     }
// });
// 2nd solution
players.sort((a,b) => b.score - a.score);

console.log(players); 
```

### Chaining Array Methods

```javascript
const products = [
    {name: 'gold star', price: 30},
  {name: 'green shell', price: 10},
  {name: 'red shell', price: 40},
  {name: 'banana skin', price: 5},
  {name: 'mushroom', price: 50}
];

// 1st option
// const filtered = products.filter(product => product.price > 20);
// const promos = filtered.map(product => {
    //   return `the ${product.name} is ${product.price / 2} pounds`;
// });

// 2nd and better option, apply method chaining
const promos = products
  .filter(product => product.price > 20)
  .map(product => `the ${product.name} is ${product.price / 2} pounds`);

console.log(promos);
```
## Dates & Times in JavaScript

They are objects in js. 

```javascript
// dates & times
// we will use the date constructor
const now = new Date(); 

// useful methods
console.log('Get full year: ', now.getFullYear()); 
now.getMonth(); 
now.getDay(); 
// ....

// timestamps
now.getTime(); // number of milisencons since the 1st january 1970

// give me the sate in string
now.toDateString(); 
now.toTimeString(); 
now.toLocaleString(); 

```

### Operations with dates

```javascript
const before = new Date('February 1 2019 7:30:59'); 
const now = new Date(); 

const diff = now.getTime() - before.getTime(); 

const mins = Math.round(diff / 100 / 60); 
const hours = Math.round(mins / 60); 
const days = Math.round(hours / 24); 

```