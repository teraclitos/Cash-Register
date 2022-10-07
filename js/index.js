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
let otherOperationsState = 0;
let boolSubs = false;

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
      if (
        otherOperationsState === 2 ||
        otherOperationsState === 3 ||
        otherOperationsState === 4
      ) {
        sum = parseFloat(arrayNumber.join("")) + calc;
        otherOperationsState = 1;
      } else {
        if (boolSum === true) {
          sum = sumRep + parseFloat(arrayNumber.join(""));
        } else {
          (sum = calc + parseFloat(arrayNumber.join("")))
            ? Number.isNaN(parseFloat(arrayNumber.join(""))) === false
            : (sum = sumRep + calc);
        }
      }
      calc = sum + parseFloat(arrayNumber.join(""));
      arrayNumber = [];
      initialValueDisplay();
      boolSum = true;

      substraction = 0;

      break;
    case `resta`:
      subsRep = substraction;
      if (
        otherOperationsState === 1 ||
        otherOperationsState === 3 ||
        otherOperationsState === 4
      ) {
        substraction = calc - parseFloat(arrayNumber.join(""));
        otherOperationsState = 2;
      } else {
        if (boolSubs === true) {
          substraction = subsRep - parseFloat(arrayNumber.join(""));
        } else {
          (substraction = parseFloat(arrayNumber.join("")) - subsRep)
            ? Number.isNaN(parseFloat(arrayNumber.join(""))) === false
            : (substraction = calc - subsRep);
        }
      }

      arrayNumber = [];
      initialValueDisplay();
      boolSubs = true;

      calc = substraction - parseFloat(arrayNumber.join(""));
      sum = 0;

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
  if (sum !== 0) {
    calc = sum + parseFloat(arrayNumber.join(""));

    display.innerHTML = calc;
    arrayNumber = [];
    sum = 0;
    boolSum = false;
    otherOperationsState = 0;
  } else if (substraction !== 0) {
    calc = substraction - parseFloat(arrayNumber.join(""));

    display.innerHTML = calc;
    arrayNumber = [];
    substraction = 0;
    boolSubs = false;
    otherOperationsState = 0;
  }
};

const deleteNumbers = () => {
  arrayNumber = [];
  calc = 0;
  boolSum = false;
  boolSubs = false;
  sum = 0;
  substraction = 0;
  otherOperationsState = 0;

  initialValueDisplay();
};

initialValueDisplay();
