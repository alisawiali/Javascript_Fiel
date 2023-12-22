console.clear();

const studentsName = {
  students: ["Alisawi "],
  //   addNewStudent: function () {},
  newStudentsName: function (name) {
    this.students.push(name);
    // console.log(this.students);
    return name;
  },
};

const backStudentsName = {
  ...studentsName,
  addNewStudentsName: function (major, year) {
    const fullName = `${major} has studied in ${major} since ${year}`;
    return this.newStudentsName(fullName);
  },
};
backStudentsName.addNewStudentsName("ali", 22);
console.log(backStudentsName.students);
