# Jogo Click Crush

Bem-vindo ao Click Crush! Um jogo de navegador vibrante e viciante, onde seu objetivo é eliminar grupos de blocos da mesma cor para alcançar a maior pontuação possível. Este projeto foi desenvolvido com HTML, CSS e JavaScript puros, demonstrando a criação de uma aplicação interativa e dinâmica sem o uso de frameworks.

## Como Jogar

O jogo é simples e intuitivo:

1.  **Clique em um Bloco:** Ao clicar em um bloco, todos os blocos adjacentes (acima, abaixo, à esquerda e à direita) da mesma cor serão selecionados.
2.  **Confirme a Jogada:** Clique novamente em qualquer um dos blocos selecionados para eliminá-los do tabuleiro.
3.  **Pontuação:** Quanto maior o grupo de blocos que você eliminar de uma só vez, mais pontos você ganha!
4.  **Fim de Jogo:** O jogo termina quando não há mais movimentos possíveis (nenhum grupo de dois ou mais blocos da mesma cor adjacentes).

## Funcionalidades

*   **Geração Dinâmica de Tabuleiro:** O tabuleiro é criado aleatoriamente a cada novo jogo, garantindo uma experiência única a cada partida.
*   **Seleção de Grupos:** Lógica de "flood fill" (preenchimento) para identificar e destacar todos os blocos adjacentes da mesma cor.
*   **Sistema de Pontuação:** A pontuação é calculada com base no tamanho do grupo de blocos removidos.
*   **Animações e Efeitos Visuais:** Efeitos sutis de CSS para destacar a seleção e a remoção dos blocos, tornando a experiência mais agradável.
*   **Responsividade:** O layout se adapta a diferentes tamanhos de tela, permitindo uma boa experiência tanto no desktop quanto em dispositivos móveis.

## Tecnologias Utilizadas

Este projeto foi construído utilizando as tecnologias fundamentais da web:

*   **HTML5:** Para a estrutura semântica da página.
*   **CSS3:** Para a estilização, layout (Flexbox) e animações.
*   **JavaScript (ES6+):** Para toda a lógica do jogo, manipulação do DOM e interatividade.

## Como Executar o Projeto Localmente

Não é necessário nenhum processo de build ou instalação complexa. Basta seguir os passos abaixo:

### 1. Clone o Repositório

Abra seu terminal e clone este repositório para sua máquina local:
```bash
git clone https://github.com/alinevitoriaw/Jogo-Click-Crush.git
cd Jogo-Click-Crush
