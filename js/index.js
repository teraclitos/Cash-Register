const initialValueDisplay = () => {
  document.getElementById("display").innerText = `0`;
};

let arrayNumber = [];
let calc = 0;
let mixCalc = 0;
let sum = 0;
let substraction = 0;
let multiplication = 0;
let division = 0;
let sumCondition = false;
let substractionCondition = false;
let multiplicationCondition = false;
let divisionCondition = false;

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
      } else if (multiplicationCondition === true) {
        sum = mixCalc * parseFloat(arrayNumber.join(""));
      } else if (divisionCondition === true) {
        sum = mixCalc / parseFloat(arrayNumber.join(""));
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
      multiplication = 0;
      division = 0;
      substractionCondition = false;
      multiplicationCondition = false;
      divisionCondition = false;
      sumCondition = true;

      break;
    case `resta`:
      if (sumCondition === true) {
        substraction = mixCalc + parseFloat(arrayNumber.join(""));
      } else if (multiplicationCondition === true) {
        substraction = mixCalc * parseFloat(arrayNumber.join(""));
      } else if (divisionCondition === true) {
        substraction = mixCalc / parseFloat(arrayNumber.join(""));
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
      multiplication = 0;
      division = 0;
      sumCondition = false;
      multiplicationCondition = false;
      divisionCondition = false;
      substractionCondition = true;

      break;

    case `multiplication`:
      if (substractionCondition === true) {
        multiplication = mixCalc - parseFloat(arrayNumber.join(""));
      } else if (sumCondition === true) {
        multiplication = mixCalc + parseFloat(arrayNumber.join(""));
      } else {
        if (multiplicationCondition === true) {
          multiplication = multiplication * parseFloat(arrayNumber.join(""));
        } else {
          (multiplication = parseFloat(arrayNumber.join("")))
            ? Number.isNaN(parseFloat(arrayNumber.join(""))) === false
            : (multiplication = calc);
        }
      }

      mixCalc = multiplication;
      arrayNumber = [];
      initialValueDisplay();

      substraction = 0;
      sum = 0;
      substractionCondition = false;
      sumCondition = false;
      multiplicationCondition = true;

      break;

    default:
      if (substractionCondition === true) {
        division = mixCalc - parseFloat(arrayNumber.join(""));
      } else if (multiplicationCondition === true) {
        division = mixCalc * parseFloat(arrayNumber.join(""));
      } else if (sumCondition === true) {
        division = mixCalc + parseFloat(arrayNumber.join(""));
      } else {
        if (divisionCondition === true) {
          division = division / parseFloat(arrayNumber.join(""));
        } else {
          (division = parseFloat(arrayNumber.join("")))
            ? Number.isNaN(parseFloat(arrayNumber.join(""))) === false
            : (division = calc);
        }
      }

      mixCalc = division;
      arrayNumber = [];
      initialValueDisplay();

      substraction = 0;
      multiplication = 0;
      sum = 0;
      substractionCondition = false;
      multiplicationCondition = false;
      sumCondition = false;
      divisionCondition = true;
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
  } else if (multiplicationCondition === true) {
    calc = multiplication * parseFloat(arrayNumber.join(""));

    display.innerHTML = calc;
    arrayNumber = [];
    multiplication = 0;
    mixCalc = 0;
    multiplicationCondition = false;
  } else {
    if (parseFloat(arrayNumber.join("")) !== 0) {
      calc = division / parseFloat(arrayNumber.join(""));

      display.innerHTML = calc;
      arrayNumber = [];
      division = 0;
      mixCalc = 0;
      divisionCondition = false;
    } else {
      display.innerText = "MATH ERROR";
    }
  }
};

const deleteNumbers = () => {
  arrayNumber = [];
  calc = 0;

  sum = 0;
  substraction = 0;
  multiplication = 0;
  division = 0;
  mixCalc = 0;
  sumCondition = false;
  substractionCondition = false;
  multiplicationCondition = false;
  divisionCondition = false;

  initialValueDisplay();
};

initialValueDisplay();
