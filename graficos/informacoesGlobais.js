const url = 'https://raw.githubusercontent.com/luisaoliveiraa/ciencia-de-dados/refs/heads/main/base-de-dados/esportes-dados-globais.json'

async function visualizarInformacoesGlobais(){
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasPraticam= (dados.total_pessoas_que_praticam_esportes_regularmente/ 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio_semana_praticando_esportes)
    //const minutos = Math.round((dados.tempo_medio_semana_praticando_esportes - horas) * 100)
    const total_pessoas_que_praticam_esportes_regularmente = ((pessoasPraticam/ pessoasNoMundo) * 100).toFixed(2)
    //console.log(dados)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo}</span> bilhões de pessoas e que aproximadamente <span>${pessoasPraticam}}%</span> delas praticam algum esporte e passam em média <span>${horas} horas</span> praticando?`
    //console.log(paragrafo)
    
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

visualizarInformacoesGlobais();
