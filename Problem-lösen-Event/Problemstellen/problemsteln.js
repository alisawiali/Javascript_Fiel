console.clear();
const getStudentsName = function () {
  return `${this.firstname},${this.age}, und grade ${this.grade}`;
};
const studens = [
  {
    firstname: "John",
    age: 21,
    grade: "A",
    getName: getStudentsName,
    //
  },
  {
    firstname: "Omer",
    age: 30,
    grade: "B",
    //  das ist sekber wie oben
    getName: getStudentsName,
  },
];

for (const student of studens) {
  student.getName = getStudentsName;
}

for (const student of studens) {
  console.log(student.getName());
}
