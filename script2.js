var resultado= document.getElementById("resultado")

function calcular(){
var veloz= parseInt(document.getElementById("veloz").value)
    if (veloz<= 60){
        resultado.innerHTML= `Você não foi multado`

    }
    else{
        resultado.innerHTML= `Vocêfoi multado, sua multa é de R$ ${(veloz-60)*100}`
    }




}