# [🐦‍🔥 Linkless Awakening - Batalha de Monstros](https://linkless-awakening-game.vercel.app/)

> [Linkless Awakening](https://linkless-awakening-game.vercel.app/) é uma aplicação React + TypeScript que permite batalhas entre monstros, inspirado no clássico 🧝‍♀️🧝‍♂️ Zelda - Link's Awakening.

## 🗃️ Índice

- [📝 Introdução](#introducao)
- [📚 Documentação](#documentacao)
- [🎯 Objetivo](#objetivo)
- [🛠 Tecnologias Utilizadas](#tecnologias)
- [✨ Funcionalidades](#funcionalidades)
- [⏩ Instruções para execução do projeto](#instrucoes)
- [⚙️ Configuração Inicial](#configuracao-inicial)
- [🚀 Execução do Projeto](#execucao-do-projeto)
- [🧪 Testes](#testes)
- [📁 Arquivos Importantes](#arquivos-importantes)
- [📝 Considerações Adicionais](#consideracoes-adicionais)
- [📄 Licença](#licenca)

---

<h3 id="introducao">📝 Introdução</h3>

**🧙‍♂️ Linkless Awakening** é uma aplicação que simula batalhas entre monstros, permitindo que usuários criem e gerenciem seus próprios monstros utilizando apenas o front-end.

- **🧝‍♀️ Inspirado no clássico Zelda - Link's Awakening**, o projeto foi desenvolvido como um desafio técnico, utilizando React e TypeScript. Como a autora gosta muito do jogo Link's Awakening decidiu misturar um pouco de magia ao código e trazer um universo sem o Link, com uma batalha de monstros.
- **🎮 Batalhas de Monstros**: Os usuários podem criar monstros com atributos personalizados e batalhar entre si, visualizando o resultado e a evolução dos HPs em um gráfico.
- **💾 Persistência Local**: Todos os monstros criados e a última batalha são salvos no navegador, permitindo que os usuários continuem de onde pararam.
- **🖥 Interface Responsiva**: O layout é adaptado para desktop e mobile, com um visual escuro.
- **🎶 Música de Ambiente**: Para você se sentir dentro desse universo, a autora selecionou sua música favorita do jogo: Overword para acompanhar nessa aventura
- Tudo foi construído buscando o melhor resultado possível dentro do tempo estipulado para o desafio (3 dias), com foco na qualidade do código, boas práticas e uma experiência de usuário agradável.

---

<h3 id="documentacao">📚 Documentações</h3>

- 🔗 [Link do Projeto](https://linkless-awakening-game.vercel.app/)
- 📖 [Documentação do Projeto (Notion)](https://flying-date-6d7.notion.site/Linkless-Awakening-Documenta-o-T-cnica-2145728f68a78085b166fa69c17a14f3)
- 📘 Documentação oficial da linguagem:
  - [React.js 🔗](https://react.dev/)
  - [Vite 🔗](https://vite.dev/)
  - [Mui design 🔗](https://mui.com/)
- 🤖 [Repositório no GitHub](https://github.com/annaluizacamargo/linkless-awakening)
- 🔗 LinkedIn da autora: [Anna Luiza Camargo](https://www.linkedin.com/in/anna-luiza-camargo-fistarol/)

---

<h3 id="objetivo">🎯 Objetivo</h3>

- 🎮 Desenvolver uma aplicação que permita batalhas entre monstros, com foco na experiência do usuário e na qualidade do código em **três dias**.
- 🧩 Criar uma interface intuitiva e responsiva, utilizando React e TypeScript.
- 🛠 Implementar funcionalidades de cadastro, edição e exclusão de monstros, além de batalhas com resultados detalhados.
- 📘 Seguir as regras de batalha:
  - O monstro com maior velocidade ataca primeiro.
  - Se houver empate de velocidade, o monstro com maior ataque ataca primeiro.
  - O dano é calculado como: ataque do atacante - defesa do defensor (mínimo 1).
  - O HP do defensor é reduzido pelo dano a cada round.
  - Os rounds continuam até o HP de um monstro chegar a zero.
  - **🏆 O vencedor é o monstro que sobreviver 🏆**

---

<h3 id="tecnologias">🛠 Tecnologias Utilizadas</h3>

- ⚛️ **ReactJS** + **TypeScript**
- 🎨 **MUI (Material UI)** para uma interface responsiva e moderna

> 📦 Utilização mínima de bibliotecas externas. Dependências podem ser verificadas em `package.json`.

---

<h3 id="funcionalidades"> ✨ Funcionalidades</h3>

- **Cadastro de Monstros:**  
  Crie monstros personalizados informando nome, ataque, defesa, velocidade, HP e imagem.
- **Lista de Monstros:**  
  Visualize todos os monstros cadastrados e alguns monstros mock já disponíveis.
- **Edição e Exclusão:**  
  Edite ou exclua monstros criados por você.
- **Batalha de Monstros:**  
  Selecione dois monstros para batalhar. Veja o resultado, logs detalhados dos rounds e a evolução dos HPs em um gráfico.
- **Persistência Local:**  
  Todos os monstros criados e a última batalha ficam salvos no seu navegador.
- **Interface Responsiva:**  
  Layout adaptado para desktop e mobile, com visual escuro.

---

<h3 id="instrucoes">⏩ Instruções para execução do projeto</h3>

- Para rodar localmente, você precisa ter as dependências instaladas no seu ambiente, principalmente o **npm** em seu ambiente de trabalho.

---

<h3 id="configuracao-inicial">⚙️ Configuração Inicial</h3>

- Esse repositório não possui **variáveis de ambiente**.
- O projeto não depende de um backend, portanto não há necessidade de configuração adicional.
- Todos os dados são salvos no **localStorage** do navegador.

---

<h3 id="execucao-do-projeto">🚀 Execução do Projeto</h3>

#### 🛠 Pré-requisitos

- Clonar o repositório do GitHub:

```bash
git clone https://github.com/annaluizacamargo/linkless-awakening.git
cd linkless-awakening
```

#### 📦 Instalação

```bash
npm install
```

#### 🚀 Executando o Projeto

##### 🧪 Ambiente de Desenvolvimento

```bash
npm run dev
```

- **Acesse via**: http://localhost:5173/

##### 🌍 Ambiente de Produção

```bash
npm run reinstall-deps
npm run build
npm run preview
```

- **Visualização em**: http://localhost:4173/

---

<h3 id="testes">🧪️ Testes</h3>

- O projeto foi desenvolvido e testado no navegador Chrome do desktop (Ubuntu 22.04) e no Android.
- Testes no código ainda não implementados.

---

<h3 id="arquivos-importantes">📁 Arquivos Importantes</h3>

- É possível alterar alguns valores dinâmicos do projeto através dos arquivos abaixo:
- 📂 src/utils/mocks/MonstersApiReturn.ts
  - Mock de retorno da API de monstros
- 📂 src/utils/constants/StatWeight.ts
  - Pesos dos atributos dos monstros que influenciam na criação da criatura

---

<h3 id="consideracoes-adicionais">📝 Considerações Adicionais</h3>

- As decisões foram tomadas com foco na 🕒 entrega rápida, 🎯 experiência do usuário e 🧩 independência do front-end, possibilitando atualizações 📡 futuras com integração a um possível back-end.
  -💡 Melhorias Futuras
  - Animações de batalha
  - Ranking de monstros
  - Compartilhamento de batalhas
  - Upload de imagens personalizadas

---

<h3 id="licenca">📄 Licença</h3>

- Este projeto é apenas para fins de avaliação técnica.

---

</br>

> Feito com carinho 💜
