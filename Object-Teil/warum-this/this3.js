console.clear();
// Difinrere clobal function
const printStudentName = function () {
  console.log(
    `I'm  ${this.name} and I'm  ${this.alter}  old und my working  ${this.Beruf}`
  );
};
const student = [
  {
    name: "Imad",
    alter: 22,
    Beruf: "Webentwickler",
    printName: printStudentName, // steinha
  },
  {
    name: "Alice",
    alter: 18,
    Beruf: "Designerin",
    printNames: printStudentName,
  },
  {
    name: "Alisawi",
    alter: 30,
    Beruf: "Manager",
    printName: printStudentName,
  },
];

student[0].printName();
student[1].printNames();
student[2].printName();
