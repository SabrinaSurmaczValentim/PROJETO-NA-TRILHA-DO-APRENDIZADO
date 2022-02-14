function Enviar(){
    var nome= document.getElementById("nome")
    var email= document.getElementById("email")
    var datanasc= document.getElementById("datanasc")
    var comentario= document.getElementById("comentario")
    var ok

    if(nome.value!="" && nome.value.indexOf(" ")!=-1){
        if(email.value.indexOf("@")!=-1){
            if(datanasc.value!="" && datanasc.value<'2011'){
                if(comentario.value.length>=50){
                    alert(nome.value +" agradecemos o seu contato!")
                    ok=true
                }
                else{
                    alert("Digite no mínino 50 caracteres no seu comentário!")
                    ok=false
                }
            }
            else
            {
                alert("Não deixe a data em branco e sua data de nascimento não pode ser posterior a 2010!")
                ok=false
            }
        }
        else{
            alert("Digite um email válido!")
            ok=false
        }
    }
    else{
        alert("Preencha o seu nome completo!")
        ok=false
    }

    return ok
}