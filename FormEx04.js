function Enviar(){
    var login= document.getElementById("login")
    var senha= document.getElementById("senha")
    var ok

    if(login.value=="aluno"){
        if(senha.value=="1234"){
            alert("Login e senha corretos, vc pode acessar o sistema!")
            ok=true
        }
        else 
        {
            if(senha.value=="")
            {
                alert("Digite sua senha!")
                ok=false
            }
            else if(senha.value!="1234")
            {
                alert("Senha incorreta!")
                ok=false
            }
           
        }
    }
    else
    {
        if(login.value=="")
        {
            alert("Digite o login!")
            ok=false
        }
        else if(login.value!="aluno")
        {
            alert("Login incorreto!")
            ok=false
        }
    }
    return ok
}
        