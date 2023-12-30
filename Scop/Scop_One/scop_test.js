document.addEventListener("click", (event) => {
  event.preventDefault();
  let count = 8;
  const addCount = () => {
    const newCount = count + 1;
    if (newCount <= 20) {
      console.log(`Adding ${count} to the counter.`);
    } else {
      alert("The maximum number of attempts has been reached!");
    }
  };
  count = 20;
  addCount();
});
