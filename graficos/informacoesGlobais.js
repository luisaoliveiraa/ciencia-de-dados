const url = 'https://raw.githubusercontent.com/luisaoliveiraa/ciencia-de-dados/refs/heads/main/base-de-dados/esportes-dados-globais.json'

async function visualizarInformacoesGlobais(){
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasComAcesso = (dados.total_pessoas_com_acesso_a_educacao / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio_dia_estudando)
    //const minutos = Math.round((dados.tempo_medio_dia_estudando - horas) * 100)
    const total_pessoas_que_praticam_esportes_regularmente = ((pessoasComAcesso / pessoasNoMundo) * 100).toFixed(2)
    //console.log(dados)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo}</span> bilhões de pessoas e que aproximadamente <span>${total_pessoas_que_praticam_esportes_regularmente}%</span> delas estão fazendo algum curso e passam em média <span>${horas} horas</span> estudando?`
    //console.log(paragrafo)
    
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

visualizarInformacoesGlobais();
