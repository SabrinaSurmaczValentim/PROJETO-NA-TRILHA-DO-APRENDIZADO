/*Crie um script em que o usuário entre com o ano de nascimento e também pergunte ao usuário se ele foi aprovado na prova prática de direção. Caso cumpram-se os requisitos o site deve retornar a informação de que ele está apto ou inapto para obter a CNH. Caso Inapto dizer em qual requisito está reprovado.*/

var ano, idade, R

ano=prompt("Digite seu ano de nascimento:")

idade=2022-parseInt(ano)

if(idade>=18){
    R=prompt("Você foi aprovado na prova prática de direção? SIM ou NÃO?") 

    if(R=="SIM"){
    alert("Então você está apto para obter a CNH! Parabéns!")
    }

    else{
        alert("Então infelizmente, você está inapto para obter a CNH, pois não foi aprovado na prova prática de direção!")
    }
}
else{
    alert("Você infelizmente não está apto a obter a CNH, pois não possui 18 anos!")
}


