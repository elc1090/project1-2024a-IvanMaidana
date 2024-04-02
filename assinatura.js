var canvas = document.getElementById("assinaturaCanvas");
var ctx = canvas.getContext("2d");
var assinaturaImagem = document.getElementById("assinaturaImagem");

var desenhando = false;
var xAnterior = 0;
var yAnterior = 0;

// Evento de mouse pressionado
canvas.addEventListener("mousedown", function (e) {
    desenhando = true;
    xAnterior = e.clientX - canvas.getBoundingClientRect().left;
    yAnterior = e.clientY - canvas.getBoundingClientRect().top;
});

// Evento de toque pressionado
canvas.addEventListener("touchstart", function (e) {
    e.preventDefault(); // Impede o comportamento padrão do toque
    desenhando = true;
    canvas.focus();
    xAnterior = e.touches[0].clientX - canvas.getBoundingClientRect().left;
    yAnterior = e.touches[0].clientY - canvas.getBoundingClientRect().top;
});

// Evento de mouse movido
canvas.addEventListener("mousemove", function (e) {
    if (!desenhando) return;
    var x = e.clientX - canvas.getBoundingClientRect().left;
    var y = e.clientY - canvas.getBoundingClientRect().top;

    ctx.beginPath();
    ctx.moveTo(xAnterior, yAnterior);
    ctx.lineTo(x, y);
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.stroke();

    xAnterior = x;
    yAnterior = y;
});

// Evento de toque movido
canvas.addEventListener("touchmove", function (e) {
    e.preventDefault(); // Impede o comportamento padrão do toque
    if (!desenhando) return;
    var x = e.touches[0].clientX - canvas.getBoundingClientRect().left;
    var y = e.touches[0].clientY - canvas.getBoundingClientRect().top;

    ctx.beginPath();
    ctx.moveTo(xAnterior, yAnterior);
    ctx.lineTo(x, y);
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.stroke();

    xAnterior = x;
    yAnterior = y;
});

// Evento de mouse liberado
canvas.addEventListener("mouseup", function () {
    desenhando = false;
});

// Evento de toque liberado
canvas.addEventListener("touchend", function (e) {
    e.preventDefault(); // Impede o comportamento padrão do toque
    desenhando = false;
    canvas.focus();
});

// Limpar a assinatura
function limparAssinatura() {
    var cvs = document.getElementById("assinaturaCanvas");
    var context = cvs.getContext("2d");
    
    context.clearRect(0, 0, cvs.width, cvs.height);
    //assinaturaImagem.src = "";
    //document.getElementById("tgform").reset();
    // document.getElementById("relevancia").value = "";
    // document.getElementById("conteudo").value = "";
    // document.getElementById("apresentacao").value = "";
}