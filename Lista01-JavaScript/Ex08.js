/*Crie um script que gere o fatorial de um número. Ex: 3! = 3x2x1 = 6*/

var n, cont, fatorial=1, acm

n=prompt("Digite um número, o qual vc deseja que seja gerado o seu fatorial:")
acm=n

for(cont=0;cont<acm;cont++)
{
    if(n>1)
    {
        document.write(n+" X ")
    }
    else
    {
        document.write(n)
    }
    fatorial=fatorial*n  
    n=n-1    
}

alert("O fatorial do número é "+fatorial)
document.write(" = "+fatorial)

