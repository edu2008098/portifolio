  let num1;
  let num2;
  let resultado;

  num1 = Number(window.prompt("digite aqui o primeiro numero:"));
  num2 = Number(window.prompt("digite o segundo numero:"));

  
  resultado = num1 + num2;

  parOuimpar = resultado % 2;

  if(parOuimpar == 0) {
      alert("O numero " + resultado + " é par");
  } else {
      alert("O numero " + resultado  + " é impar");
  }
  
