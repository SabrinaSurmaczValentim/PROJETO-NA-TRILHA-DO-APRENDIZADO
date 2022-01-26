/*Crie um script que leia 5 números e diga qual é o maior e qual o menor.*/

var cont,n, acm=0, maior, menor

for(cont=1;cont<=5;cont++)
{
    n=parseFloat(prompt("Digite o "+cont+"º número: ")) 
    while(acm<1)
    {
        maior=n 
        menor=n 
        acm++
    }
    if(n>maior)
    {
        maior=n
    }
    else
    {
        if(n<menor)
        {
            menor=n
        }
    }
}

alert("O maior número é "+maior)
alert("O menor número é "+menor)

