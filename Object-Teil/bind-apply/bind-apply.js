console.clear();
const printStudentName = function () {
  console.log(`name ${this.name} and old ${this.old} i'm working ${this.job}`);
};

let studentes = [
  { name: "John", old: 21, job: "teacher" },
  { name: "Alice", old: 29, job: "doctor" },
];

//print all students info

printStudentName.bind(studentes[0])(); // bind -> binden
// Apply wir mit so b.z

printStudentName.apply(studentes[1], []); // apply -> anwenden
