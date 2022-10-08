const initialValueDisplay = () => {
  document.getElementById("display").innerText = "0.00 $";
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
  if (arrayNumber.length < 17) {
    if (
      display.innerText !== "MATH ERROR" &&
      display.innerText !== "SYNTAX ERROR"
    ) {
      display.innerText = `${arrayNumber.join("")}`;
    } else {
      alert("Debe resetear la caja registradora");
    }
  } else {
    alert("16 cifras es el límite permitido");
  }
};

const operations = (operacion) => {
  const display = document.getElementById("display");
  if (
    display.innerText !== "MATH ERROR" &&
    display.innerText !== "SYNTAX ERROR"
  ) {
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
            sum += parseFloat(arrayNumber.join(""));
          } else {
            (sum = parseFloat(arrayNumber.join("")))
              ? Number.isNaN(parseFloat(arrayNumber.join(""))) === false
              : (sum = calc);
          }
        }

        mixCalc = sum;
        arrayNumber = [];
        display.innerText = `+`;

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
            substraction -= parseFloat(arrayNumber.join(""));
          } else {
            (substraction = parseFloat(arrayNumber.join("")))
              ? Number.isNaN(parseFloat(arrayNumber.join(""))) === false
              : (substraction = calc);
          }
        }

        mixCalc = substraction;
        arrayNumber = [];
        display.innerText = `-`;

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
            multiplication *= parseFloat(arrayNumber.join(""));
          } else if (divisionCondition === true) {
            multiplication = mixCalc / parseFloat(arrayNumber.join(""));
          } else {
            (multiplication = parseFloat(arrayNumber.join("")))
              ? Number.isNaN(parseFloat(arrayNumber.join(""))) === false
              : (multiplication = calc);
          }
        }

        mixCalc = multiplication;
        arrayNumber = [];
        display.innerText = `*`;

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
            division /= parseFloat(arrayNumber.join(""));
          } else {
            (division = parseFloat(arrayNumber.join("")))
              ? Number.isNaN(parseFloat(arrayNumber.join(""))) === false
              : (division = calc);
          }
        }

        mixCalc = division;
        arrayNumber = [];
        display.innerText = `/`;

        substraction = 0;
        multiplication = 0;
        sum = 0;
        substractionCondition = false;
        multiplicationCondition = false;
        sumCondition = false;
        divisionCondition = true;
        break;
    }
  } else {
    alert("Debe resetear la caja registradora");
  }
};

const result = () => {
  if (
    display.innerText !== "MATH ERROR" &&
    display.innerText !== "SYNTAX ERROR"
  ) {
    const display = document.getElementById("display");
    if (
      sumCondition === true &&
      Number.isNaN(parseFloat(arrayNumber.join(""))) === false
    ) {
      calc = sum + parseFloat(arrayNumber.join(""));

      display.innerText = `${calc.toFixed(2)} $`;
      arrayNumber = [];
      sum = 0;
      mixCalc = 0;
      sumCondition = false;
    } else if (
      substractionCondition === true &&
      Number.isNaN(parseFloat(arrayNumber.join(""))) === false
    ) {
      calc = substraction - parseFloat(arrayNumber.join(""));

      display.innerText = `${calc.toFixed(2)} $`;
      arrayNumber = [];
      substraction = 0;
      mixCalc = 0;
      substractionCondition = false;
    } else if (
      multiplicationCondition === true &&
      Number.isNaN(parseFloat(arrayNumber.join(""))) === false
    ) {
      calc = multiplication * parseFloat(arrayNumber.join(""));

      display.innerText = `${calc.toFixed(2)} $`;
      arrayNumber = [];
      multiplication = 0;
      mixCalc = 0;
      multiplicationCondition = false;
    } else if (
      multiplicationCondition === false &&
      divisionCondition === false &&
      sumCondition === false &&
      substractionCondition === false
    ) {
      if (Number.isNaN(parseFloat(arrayNumber.join(""))) === false) {
        calc = parseFloat(arrayNumber.join(""));
        display.innerText = `${calc.toFixed(2)} $`;
      } else {
        display.innerText = `${calc.toFixed(2)} $`;
      }
      arrayNumber = [];
      sum = 0;
      substraction = 0;
      multiplication = 0;
      division = 0;
      mixCalc = 0;
      sumCondition = false;
      substractionCondition = false;
      multiplicationCondition = false;
      divisionCondition = false;
    } else if (
      divisionCondition === true &&
      Number.isNaN(parseFloat(arrayNumber.join(""))) === false
    ) {
      if (parseFloat(arrayNumber.join("")) !== 0) {
        calc = division / parseFloat(arrayNumber.join(""));

        display.innerText = `${calc.toFixed(2)} $`;
        arrayNumber = [];
        division = 0;
        mixCalc = 0;
        divisionCondition = false;
      } else {
        display.innerText = "MATH ERROR";
      }
    } else {
      display.innerText = "SYNTAX ERROR";
    }
  } else {
    alert("Debe resetear la caja registradora");
  }
};

const reset = () => {
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
