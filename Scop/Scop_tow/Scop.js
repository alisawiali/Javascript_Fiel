console.clear();

const fun = () => {
  let counter = 1;
  return () => {
    counter++;
    return counter;
  };
};

const innerFunction = fun(); // Ruft die äußere Funktion auf, um die innere Funktion zu erhalten
console.log(innerFunction());
console.log(innerFunction());
console.log(innerFunction());
//  -------------------Oder Zweite Lösung ->
// const fun = (() => {
//   let counter = 1;
//   return () => {
//     counter++;
//     return counter;
//   };
// })();
