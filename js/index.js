const initialValueDisplay = () => {
  document.getElementById("display").innerText = `0`;
};

let arrayNumber = [];
let arrayOperations = [];

const number = (number) => {
  const display = document.getElementById("display");
  arrayNumber.push(number);
  if (arrayNumber.length < 13) {
    display.innerText = `${arrayNumber.join("")}`;
  } else {
    alert("12 cifras es el límite permitido");
  }
};

const operations = (operacion) => {
  switch (operacion) {
    case `suma`:
      arrayNumber.push("+");
      arrayOperations.push(arrayNumber.join(""));
      arrayNumber = [];
      initialValueDisplay();
      break;
    case `resta`:
      arrayNumber.push("-");
      arrayOperations.push(arrayNumber.join(""));
      arrayNumber = [];
      initialValueDisplay();
      break;
    case `multiplicacion`:
      arrayNumber.push("*");
      arrayOperations.push(arrayNumber.join(""));
      arrayNumber = [];
      initialValueDisplay();
      break;

    default:
      arrayNumber.push("/");
      arrayOperations.push(arrayNumber.join(""));
      arrayNumber = [];
      initialValueDisplay();
      break;
  }
};

const result = () => {
  const display = document.getElementById("display");
  arrayOperations.push(arrayNumber.join(""));

  let total = arrayOperations.join("");

  console.log(typeof total);
  display.innerHTML = total;
  arrayNumber = [];
};

const deleteNumbers = () => {
  arrayNumber = [];
  arrayOperations = [];

  initialValueDisplay();
};

initialValueDisplay();
