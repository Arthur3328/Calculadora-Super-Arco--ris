let tela = document.getElementById('tela');
let operacaoAtual = '';
let valorAnterior = '';
let valorAtual = '';

function adicionarValor(valor) {
    valorAtual += valor;
    tela.value = valorAtual;
}

function operacao(op) {
    if (valorAtual === '') return;
    if (valorAnterior !== '') {
        calcular();
    }
    operacaoAtual = op;
    valorAnterior = valorAtual;
    valorAtual = '';
}

function calcular() {
    if (valorAnterior === '' || valorAtual === '') return;
    let resultado;
    switch (operacaoAtual) {
        case '+':
            resultado = parseFloat(valorAnterior) + parseFloat(valorAtual);
            break;
        case '-':
            resultado = parseFloat(valorAnterior) - parseFloat(valorAtual);
            break;
        case '*':
            resultado = parseFloat(valorAnterior) * parseFloat(valorAtual);
            break;
        case '/':
            resultado = parseFloat(valorAnterior) / parseFloat(valorAtual);
            break;
        default:
            return;
    }
    tela.value = resultado;
    valorAnterior = resultado;
    valorAtual = '';
    operacaoAtual = '';
}