const muda = document.querySelector('.anima');


function start() {
    window.location.href = "game.html";
}


function testa(){
    const formulaEnviada = document.getElementById("form").value
    if(formulaEnviada=="resp3"){
        window.location.href="fase.html";
    }
    if(formulaEnviada!=="resp3") {
        window.location.href="start.html";
    }

}

