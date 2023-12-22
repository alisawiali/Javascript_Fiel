console.clear();

const studentsName = {
  students: ["Alisawi"],
  event: {
    addNewStudent: [],
  },
  newStudentsName: function (name) {
    this.students.push(name);
    for (const addStudent of this.event.addNewStudent) {
      if (addStudent) {
        addStudent(name);
      }
    }
  },

  addNewStudentFunction: function (func) {
    this.event.addNewStudent.push(func);
  },

  on: function (eventName, func) {
    if (this.event[eventName]) {
      this.event[eventName].push(func);
    } else {
      this.event[eventName] = [];
    }
  },
};

const backModal = {
  changForStudent: function (name) {
    console.log(`Beitrag wird abgebucht für ${name}`);
  },
};

//  on Methode abgerufen
studentsName.on("addNewStudent", backModal.changForStudent);
// studentsName.addNewStudentFunction(backModal.changForStudent);
studentsName.newStudentsName("Imad");
