/*Crie um script com um jogo em que o usuário digite seu nome e um valor e o
programa diga se acertou ou errou. Se o usuário errou deve ser dadas 3 dicas para
que ele tente acertar. Ex:
Digite seu nome: Fulano
Digite um numero : 1 . Fulano você errou o número está entre 2 e 10.
Digite um numero : 8 . Fulano você errou o número está entre 2 e 8.
Digite um numero : 5 . Fulano você errou o número está entre 5 e 8.
Digite um numero : 7 . Fulano você acertou.
Obs: Caso o usuário errasse a 4a vez deveria exibir uma mensagem dizendo
que ele errou e mostrar qual é o valor correto.*/

var nome, valor, cont=0, acm=2

nome=prompt("Digite o seu nome: ")
valor=prompt("Digite um valor: ")

if(valor==9)
{
    alert(nome+" você acertou!")
}
else
{
    alert(nome+" você errou, o número está entre "+acm+" e 10")
    acm=acm+2
    while(valor!=9 && cont<3)
    {
        if(cont<2)
        {
            valor=prompt("Digite um valor: ")
            if(valor==9)
            {
                alert(nome+" você acertou!")
            }
            else
            {
                alert(nome+" você errou, o número está entre "+acm+" e 10")
                acm=acm+2
            }
        }
        else if(cont==2)
        {
            valor=prompt("Digite um valor: ")
            if(valor==9)
            {
                alert(nome+" você acertou!")
            }
            else
            {
                alert(nome+" você errou, o valor correto é 9")
            }
        }
        cont++   
    }
}