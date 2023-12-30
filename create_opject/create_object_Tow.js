console.clear();
//  Andere schreibweise...... Object.create(Object.prototype,{})/ 1
const getNameStudent = function () {
  return this.firstname + " " + this.lastname + " alter " + this.id;
};
const student = {
  firstname: "Ali",
  lastname: "Alisawi",
  getName: getNameStudent,
};
// difinreen Id  in dem student object

Object.defineProperty(student, "id", {
  value: 22,
  writeable: true,
  configurable: true,
  enumerable: true,
});
// und wenn ich dir dings nicht sxchreiben würde , dann wird auf false gesetzt

for (const t in student) {
  if (typeof student[t] !== "function") {
    console.log(`${t} ${student[t]} `); // { id: 22, firstname: 'Ali', lastname: 'Alisawi'
  }
}
console.log("------------------------");
console.log(student.getName());
