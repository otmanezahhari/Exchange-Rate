// Get All Input
let currencyTwo = document.getElementById("currency-two");
let currencyOne = document.getElementById("currency-one");
let amountOne = document.getElementById("amount-one");
let amountTwo = document.getElementById("amount-two");

let swap = document.getElementById("swap");
let rate = document.getElementById("rate");

//Function calculate
function calculate() {
  const currencyOneValue = currencyOne.value;
  const currencyTwoValue = currencyTwo.value;
  //   console.log(currencyOneValue, currencyTwoValue);
  fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOneValue}`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.rates[currencyTwoValue]));
      const dataRates = data.rates[currencyTwoValue];
      amountTwo.value = (dataRates * amountOne.value).toFixed(2);
      rate.innerHTML = `<i>${data.rates[currencyOneValue]} = ${dataRates} </i>`;
    });
}

// Add Evet

currencyOne.addEventListener("change", calculate);
currencyTwo.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
amountTwo.addEventListener("input", calculate);

swap.addEventListener("click", () => {
  const temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;
  calculate();
});

calculate();
