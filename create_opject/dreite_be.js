console.clear();
console.log("Running tests..................");

const getStudentName = {
  getName: function () {
    return this.name + " " + this.lastname;
  },
};
const student = Object.create(getStudentName, {
  name: {
    value: "John Doe",
    enumerable: true,
  },
  lastname: {
    value: "Müller",
    enumerable: true,
  },
});

console.log(student.getName());
