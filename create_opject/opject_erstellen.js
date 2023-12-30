console.clear();
// ----------------->  Wir Object.create(Object.prototype), um die Eigenschaft ändern wollen oder nicht <-----------------
//
//
//  erstelle neue object mit object.prototype
const students = Object.create(Object.prototype, {
  frisname: {
    value: "Imad", // der Initlable werte
    writable: true, // darf diese werte Überschreiben werden
    // students.firstname="Alisawi"
    configurable: true, // darf deise Eigenschaft gelöscht  werden.
    // -----------------> z.b delete student.firstname ----> ohne punkt
    enumerable: true, // Taucht diese Eigenschaft in Schleifen auf?
    // -----------------> for(const stiuent in students){console.log(key)}
  },
  lastname: {
    value: "Mansouri",
    writable: true,
    configurable: true,
    enumerable: true,
  },
  subjects: {
    value: [],
    writable: true,
    configurable: false,
    enumerable: true,
  },
});
students.subjects = ["Imad", "Ali", "Alla"]; //  wenn es True kann man was fügen aber wenn es falsch ist
//dann können wir mit dem Methode push()trtzdem etw schreiben
students.frisname = "Alisawi"; // mit True kann man die Value Ändern, weil auf true gesetzt ist.

console.log("erstelle neue object: ", students); // vor dem Löschen -> true
delete students.frisname; // löscht das Firstname // true aber wenn flasch ist dann kan man es nicht löschen
console.log("erstelle neue object: ", students);
