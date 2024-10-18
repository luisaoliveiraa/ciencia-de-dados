import { getCSS, tickConfig } from "./common.js"
async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/luisaoliveiraa/ciencia-de-dados/refs/heads/main/base-de-dados/esportes-mais-praticados.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasInstituicoes = Object.keys(dados)
    const quantidadeAlunos = Object.values(dados)
    
    const data = [
        {
            x: nomeDasInstituicoes,
            y: quantidadeAlunos,
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }

        }
    ]
    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'teste',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30
            }

        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Teste',
                size: 20,
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'teste',
                size:20,
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    }
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)

}
quantidadeUsuarios();