const initialValueDisplay = () => {
  document.getElementById("display").innerText = `0`;
};

arrayNumber = [];

const number = (number) => {
  const display = document.getElementById("display");
  arrayNumber.push(number);
  if (arrayNumber.length < 13) {
    display.innerText = `${arrayNumber.join("")}`;
  } else {
    alert("12 cifras es el límite permitido");
  }
};

const deleteNumbers = () => {
  const display = document.getElementById("display");
  arrayNumber = [];
  initialValueDisplay();
};

initialValueDisplay();
