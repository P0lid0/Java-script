function logar(){
    var user;
    var senha;
while (true){
    user= document.getElementById("user").value
    senha= document.getElementById("senha").value

    if (user === "1234" && senha==="1234"){
        alert("Logado com sucesso!");
        break;
    }
    alert("Login ou senha inválido, tente novamente!")
}
   


}