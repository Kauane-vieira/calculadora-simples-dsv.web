const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const somarButton = document.getElementById('somar');
const subtrairButton = document.getElementById('subtrair');
const multiplicarButton = document.getElementById('multiplicar');
const dividirButton = document.getElementById('dividir');
const limparButton = document.getElementById('limpar');
const resultParagraph = document.getElementById('result');

somarButton.addEventListener('click', () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const result = num1 + num2;
  resultParagraph.textContent = `Result: ${result}`;
});

subtrairButton.addEventListener('click', () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const result = num1 - num2;
  resultParagraph.textContent = `Result: ${result}`;
});

multiplicarButton.addEventListener('click', () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const result = num1 * num2;
  resultParagraph.textContent = `Result: ${result}`;
});

dividirButton.addEventListener('click', () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  if (num2 !== 0) {
    const result = num1 / num2;
    resultParagraph.textContent = `Result: ${result}`;
  } else {
    resultParagraph.textContent = 'Erro: divisão por zero';
  }
});

limparButton.addEventListener('click', () => {
  num1Input.value = '';
  num2Input.value = '';
  resultParagraph.textContent = '';
});