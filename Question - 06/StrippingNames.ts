let personName: string = "\t John   \n  \t Doe  ";

console.log( `Name with whitespace: ${personName}`);

let strippedName: string = personName.trim().replace(/\s+/g, ' ');

console.log( `Name after stripping whitespace: ${strippedName}`);

