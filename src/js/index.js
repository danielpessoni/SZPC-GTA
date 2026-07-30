const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".lista-plataformas-dropdown");
const opcoesPlataformas = document.querySelectorAll(".opc-plataforma");
const logosPlataformas = document.querySelectorAll(".logo-plataforma");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});

opcoesPlataformas.forEach((opcao) => {
    opcao.addEventListener("click", () => {
        const plataformaSelecionada = opcao.dataset.plataforma;

        logosPlataformas.forEach((logo) => {
            logo.classList.remove("selecionada");
        });

        const logoSelecionada = document.querySelector(
            `.logo-plataforma[data-plataforma="${plataformaSelecionada}"]`
        );

        logoSelecionada.classList.add("selecionada");

        elementoPlataformas.classList.remove("ativo");
    });
});