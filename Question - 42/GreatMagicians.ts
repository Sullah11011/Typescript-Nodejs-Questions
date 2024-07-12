function show_magicians(magicians: string[]) {
     for (let magician of magicians) {
          console.log(magician);
     }
}

function make_great(magicians: string[]): string[] {
     let greatMagicians: string[] = [];
     for (let magician of magicians) {
          greatMagicians.push(`${magician} the Great`);
     }
     return greatMagicians;
}

let magicianNames: string[] = ['David Copperfield', 'David Blaine', 'Penn Jillette', 'Teller'];

let greatMagicians = make_great(magicianNames);

console.log("Original magicians:");
show_magicians(magicianNames);

console.log("Great magicians:");
show_magicians(greatMagicians);
