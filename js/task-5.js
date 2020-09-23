const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");
const valueToChange = (event) => {
    console.log(event);
    if (event.target.value === "") {
      return (nameOutput.textContent = "незнакомец");
    } else return (nameOutput.textContent = event.target.value);
  };

nameInput.addEventListener("input", valueToChange);

