console.clear();
const getStudentName = {
  getName: function () {
    const dataName = new Date().getFullYear();
    return dataName - this.age;
    // console.log(`${this.name} geboren am  Jahr ${this.age}`);
  },
};
const student = {
  name: "John Doe",
  major: "Computer Science",
};
//  fügen mit Object.defineProperty
Object.defineProperty(student, "age", {
  value: 27,
  enumerable: true,
  writable: true,
});
//  rufem mit  Object.setPrototypeOf
Object.setPrototypeOf(student, getStudentName);
// const studentName = student.getName();
console.log(`${student.name} ${student.getName()}`);
