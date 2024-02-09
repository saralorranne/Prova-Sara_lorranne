
function calcularFinanciamento(pagamento) {
    return pagamento / 30; 
}

function calcularConsórcio(pagamento) {
    const pagamento = 15; 
    return Financiamento * pagamento;
}


function calcularDinheiro(pagamento) {
    const pagamento = 4.5; 
    return PagamentoDinheiro * pagamento;
}


function calcular() {
    const Financiamento = document.getElementById("Financiamento").value;
    const Consórcio = parseInt(document.getElementById("Conssórcio").value);
    const Dinhairo = parseInt(document.getElementById("Dinheiro").value);
    let calcular ;
    switch (calcularvalorfinal) {
        case 'Financiamento':
            carrosvelozes = calcularvalorfinal(pagamento);
            break;
        case 'Consórcio':
            carrosvelozes = calcularvalorfinal(pagamento);
            break;
        case 'Dinheiro':
            carrosvelozes = calcularvalorfinal(pagamento);
            break;
        
        default:
            console.log("Valor final");
            return;
    }
    const calcularvalorfinal = calcularcarrosvelozes(pagamento);
    const   calcularcarrosvelozes = (pagamento);

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `
    <p>Calcular valor final: ${calcularvalorfinal} %/h</p>
    <p>Valor de carros necessários : ${calcularvalorfinal} Valor Final</p>
    <p>Calculo dos carros necessários para um cliente: ${calcularvalorfinal} Calculo Final</p>
    `;
}