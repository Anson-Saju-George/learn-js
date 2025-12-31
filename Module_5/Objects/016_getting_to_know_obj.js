const students = [
  { name: "Alice", age: 20, grade: "A" },
  { name: "Bob", age: 22, grade: "B" },
  { name: "Charlie", age: 23, grade: "C" },
];

const studentsDetails = {
  fullName: "Shravya Reddy",
  age: 21,
  marks: 94.4,
  printMarks: function () {
    console.log(`Marks: ${this.marks}`);
  },
};

console.log(studentsDetails);
console.log(studentsDetails.fullName);
studentsDetails.printMarks();
console.log(students);
