console.clear();

const studentsName = {
  students: ["Alisawi "],
  addNewStudent: function (name) {},
  newStudentsName: function (name) {
    this.students.push(name);
    console.log(this.students);
  },
};

const backModal = {
  changForStudent: function (name) {
    console.log(`Beitrag wird abgebucht für ${name}`);
  },
};
studentsName.addNewStudent = (item) => {
  backModal.changForStudent(item);
};

studentsName.newStudentsName("Ali Abd");
studentsName.addNewStudent("Imad");
