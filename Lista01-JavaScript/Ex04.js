
var numero=0, ant1=0, ant2=1, cont=0, elementos

elementos=prompt("Digite a quantidade de elementos que vc deseja para a série de Fibonacci: ")

while(cont<elementos)
{
    document.write("<t2> "+numero+" </t2>")
    numero=ant1+ant2
    ant2=ant1
    ant1=numero
    cont++
}

