const controle = document.querySelectorAll('[data-controle]')  // Botão, acessando com atributos
const estatisticas = document.querySelectorAll('[data-estatistica]')
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        OperationTab(evento.target.dataset.controle, evento.target.parentNode) //Acessando a div 'pai'
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

function OperationTab(operacao, controle){

    const peca = controle.querySelector('[data-contador]') //Input

    if(operacao === '-'){
        peca.value = Number(peca.value) - 1
    } else{
        peca.value = Number(peca.value) + 1
    }
}

function atualizaEstatisticas(peca){
console.log()

estatisticas.forEach ((elemento) => {
    elemento.textContent = Number(elemento.textContent) + pecas[peca][elemento.dataset.estatistica] //nome do elemento no index
})

}

