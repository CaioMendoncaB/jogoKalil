const muda = document.querySelector('.anima');


function start() {
    window.location.href = "game.html";
}



const btn = document.getElementById("resposta")
btn.addEventListener("click",function(){
    const formulaEnviada = document.getElementById("form").value
    alert(`Oi ${formulaEnviada}`)
    if(formulaEnviada=="bota"){
        window.location.href="index.html";
    }

},false
)

