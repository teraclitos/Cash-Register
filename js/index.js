const initialValueDisplay = () => {
  document.getElementById("display").innerText = `0`;
};

arrayNumber = [];

const number = (number) => {
  const display = document.getElementById("display");
  arrayNumber.push(number);
  if (arrayNumber.length < 14) {
    display.innerText = `${arrayNumber.join("")}`;
  } else {
    alert("13 cifras es el límite permitido");
  }
};

const deleteNumbers = () => {
  const display = document.getElementById("display");
  arrayNumber = [];
  initialValueDisplay();
};

initialValueDisplay();