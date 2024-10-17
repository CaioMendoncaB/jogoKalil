
const start = () => {
    window.location.href = "game.html";
}


const testa = () => {
    const formulaEnviada = document.getElementById("form").value
    if(formulaEnviada=="resp3"){
        window.location.href="game2.html";
    }
    if(formulaEnviada!=="resp3") {
        window.location.href="start.html";
    }

}
const testa2 = () => {
    const formulaEnviada = document.getElementById("form").value
    if(formulaEnviada=="resp4"){
        window.location.href="game3.html";
    }
    if(formulaEnviada!=="resp4") {
        window.location.href="start.html";
    } 
}
const contagem = (x) => {
    console.log(x)
    if (x > 0) {
        setTimeout(function() {
        contagem(x - 1)}, 1000);
    } 
    else {
        window.location.href="start.html";
    }
      }
const testa3 = () => {
    const formulaEnviada = document.getElementById("form").value
    if(formulaEnviada=="resp1"){
        window.location.href="fase.html";
        contagem(2)
    }
    if(formulaEnviada!=="resp1") {
        window.location.href="start.html";
    }

}