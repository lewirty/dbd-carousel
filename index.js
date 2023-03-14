const botoescarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
botoescarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desmarcarBotao();

        botao.classList.add('selecionado')

        const imagemativa = document.querySelector('.ativa')
        imagemativa.classList.remove('ativa')

        imagens[indice].classList.add('ativa')
    })
})

function desmarcarBotao() {
    const botaoselecionado = document.querySelector('.selecionado');
    botaoselecionado.classList.remove('selecionado');
}
