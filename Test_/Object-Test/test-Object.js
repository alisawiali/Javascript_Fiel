console.clear();
const getStudentMethod = {
  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.yearOfBirth;
  },
};
const student1 = {
  firstname: "Alisawi",
  lastname: "Ali",
};

const student2 = {
  firstname: "Muhammad",
  lastname: "Iqbal",
};
// Aufgaeb -----------3------- das password nicht erscheint.
Object.defineProperty(student1, "password", {
  value: "supersicher",
  writable: true,
  enumerable: false,
  configurable: false,
});
Object.defineProperty(student2, "password", {
  value: "hieraufkommentire",
  writable: true,
  enumerable: false, // Taucht diese Eigenschaft in Schleifen auf!, wenn auf true gestezt wird
  configurable: false,
});
// Aufgabe Add new  -----------2------- Äneren das allte
Object.defineProperty(student1, "yearOfBirth", {
  value: 1986,
  enumerable: true,
  writable: false,
  configurable: false,
});
Object.defineProperty(student2, "yearOfBirth", {
  value: 1990,
  enumerable: true,
});
console.log("-----------------2------------");
// student1.getAge = getStudentMethod.getAge;
// oder difiniren mit hilfe Object.setPropotype()  -> bedeuet Add
Object.setPrototypeOf(student1, getStudentMethod);
Object.setPrototypeOf(student2, getStudentMethod);

console.log("student1 getAge: " + student1.getAge());
console.log("student2 showAge: " + student2.getAge());

console.log("------------------ 3 -----------");
console.log("JSON stringify sutdent1 ", JSON.stringify(student1));
console.log("JSON stringify sutdent2 ", JSON.stringify(student2));
