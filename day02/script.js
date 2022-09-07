let quotationUSD;

const valueUSDfetch = fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
  .then(resp => resp.json())
  .then(resp => {
    quotationUSD = resp.USDBRL.high;
	})
  


function converter() {
  let inputNumber = parseFloat(document.getElementById("moeda").value);
  inputNumber < 0 ? inputNumber = 0 : inputNumber;

  const account = (inputNumber / quotationUSD).toFixed(2);

  const responseEl = document.getElementById("valorConvertido");
  responseEl.innerText = `O valor em dolar é $${account}`;
}
