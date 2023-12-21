console.clear();
const getStudentname = function () {
  return this.lastname + ", " + this.firstname;
};

const studentModual = {
  student: [{ firstname: "John", lastname: "Doe", getName: getStudentname }],
  addStudent(firstname, lastname) {
    // const newStudent = { firstname, lastname, getName: getStudentname };this.student.push(newStudent)  -----------> Oder
    this.student.push({ firstname, lastname, getName: getStudentname });
  },
  printsStudent() {
    console.log("Teilenehmer:........... ");
    for (const student of this.student) {
      console.log(`${student.getName()} is  student in Berlin`);
    }

    //  ---------------------------------->  Oder
    // this.student.forEach((student) => {
    //   console.log(`${student.getName()} studying in Berlin`);
    // });
  },
};
//  Task 1
studentModual.addStudent("Erika", "Mustermann");
console.log(studentModual.student[1].getName());
//  Task 2
studentModual.printsStudent();
