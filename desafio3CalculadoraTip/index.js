//para arredondar o numero de casas decimais para cima, assim não perde em centavos caso fosse para uma loja!!
function formatMoney(value) {
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return 'R$ ' + value
}

//função para modificar a quantidade de pessoas em split
function formatSplit(value) {
    if (value == 1) return value + ' pessoa'
    return value + ' pessoas'
}

function update() {
    let valor = Number(document.getElementById('seuValor').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value

    let tipValue = valor * (tipPercent / 100)
    let billTotal = valor + tipValue
    let billEach = billTotal / split

    //enviando de volta para o html

    document.getElementById('tipPercent').innerHTML = tipPercent + ' %'
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue)
    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal)
    document.getElementById('splitValue').innerHTML = formatSplit(split)
    document.getElementById('billEach').innerHTML = formatMoney(billTotal / split)
    
}