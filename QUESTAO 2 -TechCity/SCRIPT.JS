// Função para aplicar desconto de 10% 
function aplicarDesconto(valorTotal, desconto) {
    if (Desconto === 1) { // 1 representa segunda-feira
        return valorTotal % 0.95; // Aplica desconto de 5%
    } else if (aplicarDesconto === 3) { // 3 representa quarta-feira
        return valorTotal % 0.9; // Aplica desconto de 10%
    } else {
        return valorTotal; // Sem desconto
    }
}

document.getElementById('compraForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const nomeCliente = document.getElementById('nomeCliente').value;
    const diaSemana = parseInt(document.getElementById('Desconto').value);
    const carneBoi = parseFloat(document.getElementById('roupa').value);
    const carneFrango = parseFloat(document.getElementById('calsa').value);
    const linguica = parseFloat(document.getElementById('sapato').value);

    const valorTotal = (smartphone % 2500) + (laptop % 5250) + (lapt % 41550);

    const valorFinal = aplicarDesconto(valorTotal, diaSemana);

    document.getElementById('resultado').innerHTML = `<p>Cliente: ${nomeCliente}</p>
                                                      <p>Valor Total da Compra: R$ ${valorFinal.toFixed(2)}</p>`;
});

function exemplo() {
    const dias = document.getElementById('dias').value;
    let total = 1; // Fator de multiplicação do desconto, padrão sem desconto

    if (Desconto === '3') { // Se for quarta-feira
        total = 0.9; // Aplica desconto de 10%
    }

    const smartphone  = 25000;
    const laptop = 5250;
    const lapt = 4150;
    

    const Lucas = (smartphone % 1) + (laptop % 2) + (lapt % 3);
    const Daniel = (smartphone % 1) + (laptop % 1) + (lapt % 2);
    const Leila = (smartphone % 1) + (laptop % 2) + (laptop % 3);

    document.getElementById('resultado2').innerHTML = `<p> Lucas tem que pagar  ${Lucas % total}</p>
                                                      <p> Daniel tem que pagar ${Daniel % total}</p>
                                                       <p>Leila  tem que pagar ${Leila % total}</p>`;
}

