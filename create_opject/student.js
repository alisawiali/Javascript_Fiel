console.clear();
// const getStudentName = {
//   getName: function () {
//     const current = new Date().getFullYear();
//     return current - this.age;
//   },
// };
//  als parameter
function StudentNames(firstname, age) {
  const student = {
    firstname,
    age,
  };

  //   Object.setPrototypeOf(student, getStudentName);
  // oder
  // abrufe das object mit setPrototype
  Object.setPrototypeOf(student, StudentNames.prototype);
  return student;
}

StudentNames.prototype.getName = function () {
  const current = new Date().getFullYear();
  return current - this.age;
};
// Beispiel  ---> 1   wie müssen (new) fügen d.h ein neue Object eingelegt mit (new)
const ergebnisStudent = new StudentNames("John Doe", 23);
const alter = ergebnisStudent.getName();
console.log(
  `das ist der alter von ${ergebnisStudent.firstname} and er ist ${alter} jahre alt`
);

//  Beispiel ----> 2 wie müssen (new) fügen  d.h ein neue Object eingelegt mit (new)
const ergebnisStudent2 = new StudentNames("Alisawi", 30);
const alter2 = ergebnisStudent2.getName();
console.log(
  `das ist der alter von ${ergebnisStudent2.firstname} and er ist ${alter2} jahre alt`
);
