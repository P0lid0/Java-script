var resultado= document.getElementById("resultado")

function calcular(){
    var livros= parseInt(document.getElementById("livros").value)
    if(livros>=7){
        resultado.innerHTML= `O preço dos livros é ${livros*22}`
    }
    else{
        resultado.innerHTML= `O preço dos livros é ${livros*15}`
    }
}