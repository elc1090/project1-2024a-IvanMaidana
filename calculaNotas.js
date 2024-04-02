function verificarValor(input, limite) {
    // Obtenha o valor do campo de entrada
    var valor = parseFloat(input.value);

    // Verifique se o valor é maior que 1
    if (valor > limite) {
        // Zere o campo de entrada
        input.value = '';

        // Mostre um alerta na tela
        alert('O valor inserido é maior que o limite. O campo foi zerado.');
    }
    calcularTotal();
    
}


$(document).ready(function() {
    formatarNotas();
  });
  
  function formatarNotas() {
    $(".nota-input").maskMoney({
      thousands: '',
      decimal: '.',
      precision: 1, // Uma casa decimal
      allowZero: true, // Permitir 0.0
      allowNegative: false // Não permitir números negativos
    });

}

  
  function calcularTotal() {
    var relevancia = parseFloat(document.querySelector("#rangeInput").value);
    var conteudo = parseFloat(document.querySelector("#rangeInput1").value);
    var apresentacao = parseFloat(document.querySelector("#rangeInput2").value);
    
  
    if (!isNaN(relevancia) && !isNaN(conteudo) && !isNaN(apresentacao)) {
      var total = relevancia + conteudo + apresentacao;
      document.getElementById("total").value = total.toFixed(2);
    } else {
      document.getElementById("total").value = "";
    }
  }
  
  document.querySelector("#rangeInput").addEventListener("input", calcularTotal);
  document.querySelector("#rangeInput1").addEventListener("input", calcularTotal);
  document.querySelector("#rangeInput2").addEventListener("input", calcularTotal);


     // Seleciona todos os inputs do tipo range
     const rangeInputs = document.querySelectorAll('input[type="range"]');

     // Adiciona um event listener para cada input do tipo range
     rangeInputs.forEach(input => {
         input.addEventListener('input', updateRangeValue);
     });

     // Função para atualizar o valor do range
     function updateRangeValue(event) {
         const rangeId = event.target.id; // Obtém o ID do input
         const value = parseFloat(event.target.value).toFixed(1); // Obtém e formata o valor
         const spanId = `rangeValue${rangeId.replace('rangeInput', '')}`; // Cria o ID do span correspondente
         const span = document.getElementById(spanId); // Seleciona o span correspondente
         if (span) {
             span.textContent = value; // Atualiza o texto do span com o novo valor
         }
     }