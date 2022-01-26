/*Elabore um script em que seja possível entrar com dados de idade e sexo de 5
pessoas. Exiba:
a. Quantas pessoas são do sexo masculino e quantas pessoas são do sexo
feminino.
b. Quantas pessoas são maiores e menores de idade
c. Qual o homem mais velho e mais novo
d. Qual a mulher mais velha e mais nova
e. Quantos homens e quantas mulheres são maiores de idade.*/



var cont, idade, sexo, sm=0, acmh=0, hv, hn, maiorih=0, menorih=0, sf=0, acmm=0, maiorim=0, menorim=0, mv, mn,   maiori, menori

for(cont=1;cont<=5;cont++)
{
    idade=parseInt(prompt("Digite a idade da "+cont+"ª pessoa:"))
    sexo=prompt("Digite o sexo da "+cont+"ª pessoa (F-feminino ou M-masculino):")
    if(sexo=='M')
    {
        sm++
        while(acmh<1)
        {
            hv=idade
            hn=idade
            acmh++
        }
        if(idade>hv)
        {
            hv=idade
        }
        else if(idade<hn)
        {
            hn=idade
        }
        if(idade>=18)
        {
            maiorih++
        }
        else
        {
            menorih++
        }
    }
    else if(sexo=='F')
    {
        sf++
        while(acmm<1)
        {
            mv=idade
            mn=idade
            acmm++
        }
        if(idade>mv)
        {
            mv=idade
        }
        else if(idade<mn)
        {
            mn=idade
        }
        if(idade>=18)
        {
            maiorim++
        }
        else
        {
            menorim++
        }
    }
}


maiori=maiorih+maiorim
menori=menorih+menorim

alert(sm+" pessoa(s) é/são do sexo masculino e "+sf+" pessoa(s) é/são do sexo feminino.")
alert(maiori+" pessoa(s) é/são maiore(s) de idade e "+menori+" pessoas é/são menor(es) de idade.")
alert("O homem mais velho tem "+hv+" ano(s) e o homem mais novo tem "+hn+" ano(s).")
alert("A mulher mais velha tem "+mv+" ano(s) e a mulher mais nova tem "+mn+" ano(s).")
alert(maiorih+" homens/homem e "+maiorim+" mulheres/mulher são maiores de idade.")
