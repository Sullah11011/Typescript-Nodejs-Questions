const personName: string = "John Doe";

function toTitleCase(userName: string): string {
    return userName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
  }

console.log(`Person name in lowercase: ${personName.toLowerCase()}`);
console.log(`Person name in uppercase: ${personName.toUpperCase()}`);
console.log(`Person name in title case: ${toTitleCase(personName)}`);
