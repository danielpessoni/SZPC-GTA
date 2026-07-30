# 🚗 Landing Page GTA V — Rockstar Games

Landing Page promocional inspirada na interface oficial de divulgação do **Grand Theft Auto V** para diferentes plataformas. O projeto foi inicialmente desenvolvido durante a **Semana do Zero ao Programador Contratado (SZPC)**, promovida pela escola **Dev em Dobro**, e posteriormente passou por um processo completo de **refatoração, reorganização e personalização**, mantendo a essência visual do projeto original e adicionando melhorias de estrutura, responsividade, navegação e interatividade.

---

## 🕹️ Funções Existentes

A página reúne elementos essenciais para apresentação do produto, navegação interna e seleção de plataformas:

* **Menu de Seleção de Plataformas Expansível:** Ao clicar no botão *"Selecione a plataforma"*, a lista de plataformas disponíveis é exibida ou ocultada utilizando JavaScript e a alternância da classe `ativo`.
* **Identidade Visual por Plataforma:** As opções disponíveis possuem bordas e efeitos *hover* específicos para PlayStation, Xbox e PC, utilizando variáveis CSS para centralizar as cores da interface.
* **Seleção Visual de Plataforma:** A plataforma escolhida pode alterar visualmente o respectivo logo apresentado na seção de compra, reforçando o feedback da interação do usuário.
* **Navegação Interna com Scroll Suave:** Os links de navegação e chamadas para ação utilizam âncoras e rolagem suave para conduzir o usuário entre as seções da página.
* **Cabeçalho com Comportamento Sticky:** O cabeçalho permanece visível durante a navegação da área principal e deixa de acompanhar o usuário conforme o limite definido pelo layout é alcançado.
* **Efeito Parallax no Hero:** A imagem principal utiliza um efeito de profundidade durante a rolagem, tornando a apresentação inicial mais dinâmica.
* **Responsividade Adaptativa:** O layout se adapta progressivamente a diferentes tamanhos de tela, reorganizando elementos, ajustando o tamanho dos conteúdos, reposicionando os logos das plataformas e simplificando a interface em telas menores.

---

## 💻 Recursos de Código

A estrutura explora técnicas de organização, estilização e comportamento dinâmico utilizando recursos nativos da Web:

* **Carregamento de Fontes Locais (****`@font-face`****):** Importação da fonte `.ttf` (*ChaletComprime*) armazenada localmente para reproduzir a identidade tipográfica do projeto.
* **Arquitetura CSS Modular:** Separação das responsabilidades entre `reset.css`, `variaveis.css`, `base.css`, `estilo.css` e `responsivo.css`, facilitando manutenção e evolução do projeto.
* **Variáveis CSS Globais:** Centralização de cores, tipografia, espaçamentos, dimensões, bordas e transições em `variaveis.css`.
* **Camada de Gradiente com Pseudo-elemento (****`::after`****):** Aplicação de gradientes sobre a imagem principal para controlar o contraste e melhorar a leitura do conteúdo.
* **Comportamento de Toggle Simples:** Utilização de `classList.toggle("ativo")` no JavaScript para controlar a abertura e o fechamento da lista de plataformas.
* **Máscaras CSS para SVGs:** Uso de `mask-image` e `-webkit-mask-image` para permitir a aplicação dinâmica de cores aos logos das plataformas sem alterar diretamente os arquivos SVG.
* **Grid Responsivo:** Organização dos logos das plataformas com CSS Grid, adaptando sua disposição conforme a largura disponível.
* **Navegação Suave:** Utilização de `scroll-behavior: smooth` para proporcionar uma transição gradual entre as seções da página.
* **Media Queries Progressivas:** Uso de diferentes pontos de quebra para adaptar o layout de desktops até telas extremamente pequenas, priorizando a legibilidade e a experiência do usuário.

---

## 🛠️ Stacks Utilizadas

* **HTML5:** Estrutura semântica utilizando `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, listas, botões, imagens e vetores SVG.
* **CSS3:** Flexbox, CSS Grid, variáveis customizadas, máscaras (`mask-image`), gradientes, pseudo-elementos, transições, posicionamento sticky, parallax com background e *media queries*.
* **JavaScript (Vanilla JS):** Manipulação do DOM, escuta de eventos de clique, seleção de elementos e alternância dinâmica de classes com `classList.toggle()`.

---

## 🎯 Contexto e Propósito Histórico

Este repositório registra a evolução de uma Landing Page desenvolvida originalmente durante a **Semana do Zero ao Programador Contratado (SZPC)**.

Além de consolidar os conhecimentos apresentados no evento, o projeto foi utilizado como exercício de **refatoração e personalização de código**, com foco em melhorar a organização do HTML, estabelecer uma arquitetura CSS mais escalável, revisar a responsividade e adicionar interações próprias à interface.

O objetivo da refatoração foi preservar a identidade visual e a proposta original do projeto, mas construir uma implementação com **maior organização, legibilidade, manutenção e identidade própria**, demonstrando não apenas a reprodução de uma interface, mas também a capacidade de evoluir e aprimorar um projeto existente.

O projeto foi desenvolvido originalmente durante a **Semana do Zero ao Programador Contratado (SZPC)**, da **Dev em Dobro**, utilizando como base o material apresentado pelos mentores.

Para fins de estudo e evolução pessoal, esta versão passou por um processo de refatoração, reorganização e personalização. O código original utilizado como referência pode ser consultado no [REPOSITÓRIO DEV EM DOBRO](https://github.com/devemdobro/projeto-gta).