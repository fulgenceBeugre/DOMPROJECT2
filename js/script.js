document.addEventListener("DOMContentLoaded", () => {
  let colorBoxElement = document.getElementById("color-box");
  let buttonElement = document.getElementById("change-color-btn");

  function getRandomColor() {
    let possibleChars = "0123456789ABCDEF";
    let newColor = "#";

    for (let i = 0; i < 6; i++) {
      newColor += possibleChars[Math.floor(Math.random() * 16)];
    }

    return newColor;
  }

  buttonElement.addEventListener("click", () => {
    let randomColor = getRandomColor();

    colorBoxElement.style.backgroundColor = randomColor;
  });
});
