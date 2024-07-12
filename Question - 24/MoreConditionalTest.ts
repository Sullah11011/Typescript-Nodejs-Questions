let country: string = 'USA';
console.log(`Is country == 'USA'? I predict True.`);
console.log(country == 'USA');

console.log(`Is country != 'USA'? I predict False.`);
console.log(country != 'USA');

console.log(`Is country.toLowerCase() == 'usa'? I predict True.`);
console.log(country.toLowerCase() == 'usa');

console.log(`Is country.toLowerCase() == 'USA'? I predict False.`);
console.log(country.toLowerCase() == 'USA');

let num1: number = 10;
let num2: number = 5;
console.log(`Is num1 == num2? I predict False.`);
console.log(num1 == num2);

console.log(`Is num1 != num2? I predict True.`);
console.log(num1 != num2);

console.log(`Is num1 > num2? I predict True.`);
console.log(num1 > num2);

console.log(`Is num1 < num2? I predict False.`);
console.log(num1 < num2); 

console.log(`Is num1 >= num2? I predict True.`);
console.log(num1 >= num2); 

console.log(`Is num1 <= num2? I predict False.`);
console.log(num1 <= num2); 

console.log(`Is num2 <= num1? I predict True.`);
console.log(num2 <= num1); 

console.log(`Is num2 < num1? I predict True.`);
console.log(num2 < num1);



let isSunny: boolean = true;
let isWarm: boolean = false;
console.log(`Is it sunny and warm? I predict False.`);
console.log(isSunny && isWarm); 

let isRainy: boolean = true;
let isCold: boolean = false;
console.log(`Is it rainy or cold? I predict True.`);
console.log(isRainy || isCold);

let fruits: string[] = ['apple', 'banana', 'orange', 'grape'];

console.log(`Is orange in the fruits array? I predict True.`);
console.log(fruits.includes("orange"));

console.log(`Is watermelon in the fruits array? I predict False.`);
console.log(fruits.includes("watermelon"));

let vegetables: string[] = ['carrot', 'spinach', 'broccoli', 'celery'];
console.log(`Is lettuce not in the vegetables array? I predict True.`);
console.log(vegetables.includes("lettuce")); 

console.log(`Is Cabage in the vegetables array? I predict False.`);
console.log(vegetables.includes("Cabage")); 
