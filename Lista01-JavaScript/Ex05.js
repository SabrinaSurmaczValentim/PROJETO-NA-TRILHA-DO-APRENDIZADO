/*Crie um script que leia o primeiro termo, a razão e a quantidade de termos e gere uma
progressão geométrica*/

var pt, razao, qtermos, pg, cont  

pt=prompt("Digite o primeiro termo para gerar uma progressão geométrica:")
razao=prompt("Digite a razão:")
qtermos=prompt("Digite a quantidade de termos:")
pg=pt
document.write("PG:( ")

for(cont=1;cont<=qtermos;cont++)
{
    if(cont<qtermos)
    {
        document.write(pg+",")
    }
    else
    {
        document.write(pg+" )")
    }
    pg=pg*razao
}

