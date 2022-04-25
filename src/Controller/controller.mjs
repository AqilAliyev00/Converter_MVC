export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    this.render();
  }

  render() {
    const divRadio = document.querySelectorAll(".radio");
    const input = document.querySelectorAll(".input-text");
    const API_URL = "https://api.exchangerate.host/latest";

    async function currency() {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data.rates);
      const arrKeys = Object.keys(data.rates);
      console.log(arrKeys[0]);
      const rub = data.rates.RUB;
      const usd = data.rates.USD;
      const eur = data.rates.EUR;
      const gbp = data.rates.GBP;

      const options = [rub, usd, eur, gbp];

      input[0].addEventListener("keyup", () => {
        const firstradio = document.getElementsByName("first-radio");
        const secondradio = document.getElementsByName("second-radio");
        let firstNumber, secondNumber;
        for (let i = 0; i < firstradio.length; i++) {
          if (firstradio[i].checked) {
            firstNumber = i;
            break;
          }
        }
        for (let j = 0; j < secondradio.length; j++) {
          if (secondradio[j].checked) {
            secondNumber = j;
            break;
          }
        }

        input[1].value =
          (input[0].value * options[secondNumber]) / options[firstNumber];

        const label = document.querySelectorAll(".input-label");

        const rateFrom = document.getElementById("rateFrom");
        rateFrom.innerText = `1 ${label[firstNumber].innerText} = ${(
          options[secondNumber] / options[firstNumber]
        ).toFixed(6)} ${label[secondNumber].innerText}`;

        const rateIn = document.getElementById("rateIn");
        rateIn.innerText = `1 ${label[secondNumber].innerText} = ${(
          options[firstNumber] / options[secondNumber]
        ).toFixed(6)} ${label[firstNumber].innerText}`;
      });

      input[1].addEventListener("keyup", () => {
        const firstradio = document.getElementsByName("first-radio");
        const secondradio = document.getElementsByName("second-radio");
        let firstNumber, secondNumber;
        for (let i = 0; i < firstradio.length; i++) {
          if (firstradio[i].checked) {
            firstNumber = i;
            break;
          }
        }
        for (let j = 0; j < secondradio.length; j++) {
          if (secondradio[j].checked) {
            secondNumber = j;
            break;
          }
        }

        input[0].value =
          (input[1].value * options[firstNumber]) / options[secondNumber];

        const label = document.querySelectorAll(".input-label");

        const rateFrom = document.getElementById("rateFrom");
        rateFrom.innerText = `1 ${label[firstNumber].innerText} = ${(
          options[secondNumber] / options[firstNumber]
        ).toFixed(6)} ${label[secondNumber].innerText}`;

        const rateIn = document.getElementById("rateIn");
        rateIn.innerText = `1 ${label[secondNumber].innerText} = ${(
          options[firstNumber] / options[secondNumber]
        ).toFixed(6)} ${label[firstNumber].innerText}`;
      });

      divRadio[0].addEventListener("change", () => {
        const firstradio = document.getElementsByName("first-radio");
        const secondradio = document.getElementsByName("second-radio");
        let firstNumber, secondNumber;
        for (let i = 0; i < firstradio.length; i++) {
          if (firstradio[i].checked) {
            firstNumber = i;
            break;
          }
        }
        for (let j = 0; j < secondradio.length; j++) {
          if (secondradio[j].checked) {
            secondNumber = j;
            break;
          }
        }
        console.log(firstNumber);
        console.log(secondNumber);

        input[1].value =
          (input[0].value * options[secondNumber]) / options[firstNumber];

        const label = document.querySelectorAll(".input-label");

        const rateFrom = document.getElementById("rateFrom");
        rateFrom.innerText = `1 ${label[firstNumber].innerText} = ${(
          options[secondNumber] / options[firstNumber]
        ).toFixed(6)} ${label[secondNumber].innerText}`;

        const rateIn = document.getElementById("rateIn");
        rateIn.innerText = `1 ${label[secondNumber].innerText} = ${(
          options[firstNumber] / options[secondNumber]
        ).toFixed(6)} ${label[firstNumber].innerText}`;
      });

      divRadio[1].addEventListener("change", () => {
        const firstradio = document.getElementsByName("first-radio");
        const secondradio = document.getElementsByName("second-radio");
        let firstNumber, secondNumber;
        for (let i = 0; i < firstradio.length; i++) {
          if (firstradio[i].checked) {
            firstNumber = i;
            break;
          }
        }
        for (let j = 0; j < secondradio.length; j++) {
          if (secondradio[j].checked) {
            secondNumber = j;
            break;
          }
        }
        console.log(firstNumber);
        console.log(secondNumber);

        input[1].value =
          (input[0].value * options[secondNumber]) / options[firstNumber];

        const label = document.querySelectorAll(".input-label");

        const rateFrom = document.getElementById("rateFrom");
        rateFrom.innerText = `1 ${label[firstNumber].innerText} = ${(
          options[secondNumber] / options[firstNumber]
        ).toFixed(6)} ${label[secondNumber].innerText}`;

        const rateIn = document.getElementById("rateIn");
        rateIn.innerText = `1 ${label[secondNumber].innerText} = ${(
          options[firstNumber] / options[secondNumber]
        ).toFixed(6)} ${label[firstNumber].innerText}`;
      });
    }

    currency();
  }
}
