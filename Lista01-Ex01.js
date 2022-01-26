/*Crie um script em que seja possível digitar a temperatura em Celsius, e seja exibida a
temperatura convertida em Fahrenheit e Kelvin*/

var C,F,K

C=prompt("Digite a temperatura em Celsius:")

F=(parseFloat(C) * 9/5) + 32

K= parseFloat(C) + 273.15 

alert("A temperatura convertida em Fahrenheit é "+F+ "   A temperatura convertida em Kelvin é "+K)


