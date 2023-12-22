console.clear();
//  Verschachtelt ......... Function
const studentModal = {
  students: ["MAx Müller"],
  addStudents(name) {
    this.students.push(name);

    bankModal.chargForStudent(name);
  },
};

const bankModal = {
  chargForStudent(name) {
    console.log(" hier is " + name);
  },
};

const nameTest = "Alla Ali";
studentModal.addStudents(nameTest);

const nameTow = "Omer Alisawi";
studentModal.addStudents(nameTow);

//  hier werden all Name abgerufen Durch die Function bankModal.chargForStudent(name);
studentModal.addStudents("Alisawi Ali");
console.log(studentModal.students); // [ MAx Müller', 'Alla Ali', 'Omer Alisawi', 'Alisawi' ]
