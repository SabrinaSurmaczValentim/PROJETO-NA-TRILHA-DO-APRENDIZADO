function somar(){
    var n1, n2, resultado

    n1=parseFloat(document.getElementById("n1").value)
    n2=parseFloat(document.getElementById("n2").value)

    resultado=n1+n2

    document.getElementById("resultado").innerHTML = `o resultado da soma é ${resultado}`

}