const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".lista-plataformas-dropdown");

botao.addEventListener("click", () => {
    const aberto = botao.classList.toggle("ativo");
    elementoPlataformas.classList.toggle("ativo", aberto);
    botao.setAttribute("aria-expanded", aberto);
});