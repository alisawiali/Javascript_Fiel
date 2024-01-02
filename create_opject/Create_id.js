console.clear();

const getStudentname = {
  getName: function () {
    return `${this.name} ${this.major}`;
  },
};
const student = Object.create(getStudentname, {
  name: {
    value: "John Doe",
    enumerable: true,
  },

  major: {
    value: "Computer Science",
    enumerable: true,
  },
});
debugger;
console.log(" Das Ergebnis: " + student.getName());



