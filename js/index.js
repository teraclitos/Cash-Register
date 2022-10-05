const initialValueDisplay = () => {
  document.getElementById("display").innerText = `0`;
};

let arrayNumber = [];
let calc = 0;
let sum = 0;
let substraction = 0;
let multiplicacion = 0;
let division = 0;
let boolSum = false;

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
      sumRep = sum;
      if (boolSum === true) {
        sum = sumRep + parseFloat(arrayNumber.join(""));
      } else {
        (sum = sumRep + calc + parseFloat(arrayNumber.join("")))
          ? Number.isNaN(parseFloat(arrayNumber.join(""))) === false
          : (sum = sumRep + calc);
      }

      arrayNumber = [];
      initialValueDisplay();
      boolSum = true;
      break;
    // case `resta`:
    //   arrayNumber.push("-");
    //   calc.push(arrayNumber.join(""));
    //   arrayNumber = [];
    //   initialValueDisplay();
    //   break;
    // case `multiplicacion`:
    //   arrayNumber.push("*");
    //   calc.push(arrayNumber.join(""));
    //   arrayNumber = [];
    //   initialValueDisplay();
    //   break;

    default:
      // arrayNumber.push("/");
      // calc.push(arrayNumber.join(""));
      arrayNumber = [];
      initialValueDisplay();
      break;
  }
};

const result = () => {
  const display = document.getElementById("display");
  if (sum !== 0) {
    calc = sum + parseFloat(arrayNumber.join(""));

    display.innerHTML = calc;
    arrayNumber = [];
    sum = 0;
    boolSum = false;
  } else {
  }
};

const deleteNumbers = () => {
  arrayNumber = [];
  calc = 0;
  boolSum = false;

  initialValueDisplay();
};

initialValueDisplay();
