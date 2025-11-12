document.title = "site foda 2000 e 2"

verde = 0

function mudaCorDotexto(){
    verde = verde + 25
document.body.style.color = `rgb(0,${verde},000)`
}

botao = document.querySelector("button")

botao.addEventListener("click", mudaCorDotexto)

window.setInterval(mudaCorDotexto, 100)