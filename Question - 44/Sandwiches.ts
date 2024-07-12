function make_sandwich(sandwichItems: string[]) {
     console.log("Making a sandwich with:");
     for (let item of sandwichItems) {
         console.log(`- ${item}`);
     }
     console.log("Sandwich is ready!\n");
 }
 
 make_sandwich(['Turkey', 'Cheese', 'Lettuce', 'Tomato']);
 make_sandwich(['Ham', 'Swiss Cheese', 'Mustard']);
 make_sandwich(['Peanut Butter', 'Jelly']);
 