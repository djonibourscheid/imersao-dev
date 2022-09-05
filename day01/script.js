function showResult() {
  const firstNumber = Number(document.getElementById("firstNumber").value);
  const secondNumber = Number(document.getElementById("secondNumber").value);
  const thirdNumber = Number(document.getElementById("thirdNumber").value);

  const account = (firstNumber + secondNumber + thirdNumber) / 3;

  const resultEl = document.querySelector(".result");
  return resultEl.innerText = `O resultado das médias é ${parseFloat(account.toFixed(2))}`;
}