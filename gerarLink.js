document.addEventListener("DOMContentLoaded", function() {
    // Function to get URL parameter by name
    function getParameterByName(name) {
      var urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(name);
    }

    // Get values from URL parameters
    var nomeAlunoParam = getParameterByName("nomeAluno");
    var nomeAvaliadorParam = getParameterByName("nomeAvaliador");
    var dataParam = getParameterByName("data");
    var horaParam = getParameterByName("hora");
    var semestreParam = getParameterByName("semestre");

    // Fill form fields with URL parameter values
    document.getElementById("nameStudent").value = nomeAlunoParam || "";
    document.getElementById("nameEvaluator").value = nomeAvaliadorParam || "";
    document.getElementById("date").value = dataParam || "";
    document.getElementById("time").value = horaParam || "";
    document.getElementById("semester").value = semestreParam || "";
});

const btn = document.querySelector("#gerarLink");

btn.addEventListener("click", function(e){
    e.preventDefault();
    const nomeAluno = encodeURIComponent(document.getElementById("nameStudent").value);
    const nomeAvaliador = encodeURIComponent(document.getElementById("nameEvaluator").value);
    const dataValue = encodeURIComponent(document.getElementById("date").value);
    const horaValue = encodeURIComponent(document.getElementById("time").value);
    const semestreValue = encodeURIComponent(document.getElementById("semester").value);

    const url = `index.html?nomeAluno=${nomeAluno}&nomeAvaliador=${nomeAvaliador}&data=${dataValue}&hora=${horaValue}&semestre=${semestreValue}`;

    window.open(url, '_blank');
});
