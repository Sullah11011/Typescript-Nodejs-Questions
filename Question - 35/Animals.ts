const animals: string[] = ['Dog', 'Cat', 'Rabbit'];

console.log("List of animals:");
for (let animal of animals) {
     console.log(animal);
}

console.log("Statements about each animal:");
for (let animal of animals) {
     console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

console.log("What these animals have in common:");
console.log("Any of these animals would make a great pet!");
