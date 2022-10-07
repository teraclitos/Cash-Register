const initialValueDisplay = () => {
  document.getElementById("display").innerText = `0`;
};

let arrayNumber = [];
let calc = 0;
let mixCalc = 0;
let sum = 0;
let substraction = 0;
let multiplicacion = 0;
let division = 0;
let sumCondition = false;
let substractionCondition = false;

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
      if (substractionCondition === true) {
        sum = mixCalc - parseFloat(arrayNumber.join(""));
      } else {
        if (sumCondition === true) {
          sum = sum + parseFloat(arrayNumber.join(""));
        } else {
          (sum = parseFloat(arrayNumber.join("")))
            ? Number.isNaN(parseFloat(arrayNumber.join(""))) === false
            : (sum = calc);
        }
      }

      mixCalc = sum;
      arrayNumber = [];
      initialValueDisplay();

      substraction = 0;
      substractionCondition = false;
      sumCondition = true;

      break;
    case `resta`:
      if (sumCondition === true) {
        substraction = mixCalc + parseFloat(arrayNumber.join(""));
      } else {
        if (substractionCondition === true) {
          substraction = substraction - parseFloat(arrayNumber.join(""));
        } else {
          (substraction = parseFloat(arrayNumber.join("")))
            ? Number.isNaN(parseFloat(arrayNumber.join(""))) === false
            : (substraction = calc);
        }
      }

      mixCalc = substraction;
      arrayNumber = [];
      initialValueDisplay();

      sum = 0;
      sumCondition = false;
      substractionCondition = true;

      break;

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
  if (sumCondition === true) {
    calc = sum + parseFloat(arrayNumber.join(""));

    display.innerHTML = calc;
    arrayNumber = [];
    sum = 0;
    mixCalc = 0;
    sumCondition = false;
  } else if (substractionCondition === true) {
    calc = substraction - parseFloat(arrayNumber.join(""));

    display.innerHTML = calc;
    arrayNumber = [];
    substraction = 0;
    mixCalc = 0;
    substractionCondition = false;
  }
};

const deleteNumbers = () => {
  arrayNumber = [];
  calc = 0;

  sum = 0;
  substraction = 0;
  mixCalc = 0;
  sumCondition = false;
  substractionCondition = false;

  initialValueDisplay();
};

initialValueDisplay();
