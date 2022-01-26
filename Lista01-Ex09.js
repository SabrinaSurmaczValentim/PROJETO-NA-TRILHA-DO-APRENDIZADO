/*Crie um script que diga se um número é múltiplo de 3 ou 7.*/

var n 

n=parseInt(prompt("Digite um número para saber se é múltiplo de 3 ou 7: (Caso não apareça uma mensagem de alerta, é porque o número não é múltiplo nem de 3 e nem de 7) "))
if(n%3==0)
{
    alert(n+" é múltiplo de 3")
}
if(n%7==0)
{
    alert(n+" é múltiplo de 7")
}

