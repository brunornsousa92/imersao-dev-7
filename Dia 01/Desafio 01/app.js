var valorEmBitcoin = 5;
var cotacaoDoBitcoin = 176289.81;

var valorEmReal = valorEmBitcoin * cotacaoDoBitcoin;
valorEmReal = valorEmReal.toFixed(2);

alert ("A quantidade de " + valorEmBitcoin + " Bitcoin na cotação atual é: R$ " + valorEmReal);