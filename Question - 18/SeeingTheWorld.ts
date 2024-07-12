const famousPlaces: string[] = [
     "Eiffel Tower",
     "Great Wall of China",
     "Taj Mahal",
     "Machu Picchu",
     "Pyramids of Giza"
];

console.log("Orignal list =>", famousPlaces);
console.log("Sorted list =>", [...famousPlaces].sort());
console.log("Orignal list after sort =>", famousPlaces);
console.log("Reverse list alphabetically",[...famousPlaces].sort().reverse());
console.log("Orignal list after reverse",famousPlaces);
famousPlaces.reverse();
console.log("Orignal list after reverse orignal list",famousPlaces);
famousPlaces.reverse();
console.log("Orignal list after again reverse orignal list",famousPlaces);
famousPlaces.sort();
console.log("Orignal list after sort orignal list",famousPlaces);
famousPlaces.sort().reverse();
console.log("Orignal list after again sort orignal list",famousPlaces);
