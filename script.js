const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "você sabe o que é cyberbullying?",
        alternativas: [
            "sim",
            "não"
        ]
    },
    {
        enunciado: "você acha que o cyberbullying vem se tornando mais preocupante para a sociedade?",
        alternativas: [
            "SIM",
            "NÃO",
        ]
    },
    {
        enunciado: "com a ocorrência do cyberbullying,você acha que pode afetar o cotidiano e vivencia de alguem?",
        alternativas: [
            "na maioria dos casos",
            "em todos os casos",
            "eu acho que não afeta"
        ]   
    },
    {
        enunciado: "se você tivesse a oportunidade,se voluntariaria para um projeto contra o cyberbullying?",
        alternativas: [
            "Sim",
            "não",
            "talvez"
        ]
    },
    {
        enunciado: "Você acha que esse questionario pode fazer as pessoas pensarem sobre casos de cyberbullying",
        alternativas: [
           "Sim,pode ajudar",
            "Não ajuda pois é muito escasso",
            "ajuda,porém pode melhorar"
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();