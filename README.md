# 🚗 Landing Page GTA V — Rockstar Games

Landing Page promocional inspirada na interface oficial de divulgação do **Grand Theft Auto V** para os consoles de última geração (PS5 e Xbox Series X|S). O projeto foi desenvolvido durante a **Semana do Zero ao Programador Contratado (SZPC)**, promovida pela escola **Dev em Dobro**, focando na construção de layouts modernos com temática gamer, tipografia customizada e menus interativos.

---

## 🕹️ Funções Existentes

A página reúne elementos essenciais para apresentação de produtos e chamadas para ação (*Call to Action*):

*   **Menu de Seleção de Plataformas Expansível:** Ao clicar no botão *"Selecione a plataforma"*, a lista de plataformas disponíveis é exibida/ocultada via animação de transição, permitindo interatividade direta com o usuário.
*   **Identidade Visual Personalizada por Marca:** Cada plataforma na lista expansível possui uma borda estilizada e efeito *hover* exclusivo com a cor oficial da marca (Azul para PlayStation, Verde para Xbox e Amarelo para PC/Rockstar Games).
*   **Navegação Interna Direta:** Links de menu e botões de chamada com scroll suave e ancoragem para a seção de compra (`#comprar`).
*   **Responsividade Adaptativa:** Ajuste completo do layout para telas menores (smartphones e tablets), adaptando botões para largura total, reorganizando itens do cabeçalho e alterando o degradê da imagem principal para manter a legibilidade.

---

## 💻 Recursos de Código

A estrutura explora técnicas refinadas de estilização CSS e comportamento dinâmico via DOM:

*   **Carregamento de Fontes Locais (`@font-face`):** Importação direta de arquivos de fonte `.ttf` (*ChaletComprime*) armazenados localmente no projeto para replicar com fidelidade a tipografia oficial da marca.
*   **Camada de Gradiente com Pseudo-elementos (`::after`):** Aplicação de um gradiente linear transparente sobre a imagem principal para escurecer o fundo do lado esquerdo, garantindo excelente contraste para os textos de apresentação.
*   **Comportamento de Toggle Simples:** Uso do método `classList.toggle("ativo")` no JavaScript para alterar a visibilidade do submenu de plataformas com pouquíssimas linhas de código.
*   **Estrutura de Estilos Modular:** Separação limpa do CSS em arquivos dedicados (`reset.css`, `style.css`, `fontes.css` e `responsivo.css`).

---

## 🛠️ Stacks Utilizadas

*   **HTML5:** Estrutura semântica utilizando `<header>`, `<main>`, `<section>`, `<nav>`, vetores SVG para logos em alta definição e links de ancoragem.
*   **CSS3 Tradicional:** Flexbox para alinhamentos, fontes externas/locais, gradientes lineares, transições suaves (`transition`), manipulação de opacidade e *media queries*.
*   **JavaScript (Vanilla JS):** Escuta de evento de clique (`addEventListener`) e alternância dinâmica de classes de estilo (`classList.toggle`).

---

## 🎯 Contexto e Propósito Histórico

Este repositório registra o aprendizado na criação de *Landing Pages* promocionais de alto apelo visual. O exercício serviu para consolidar a importação de fontes proprietárias, a sobreposição de elementos visuais com CSS puro e a implementação de menus sanfona/expansíveis utilizando JavaScript simples, simulando a estrutura de um site profissional do setor de games.
