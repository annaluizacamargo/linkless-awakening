# linkless-awakening

# Desafio técnico Revi

Bem vindo ao desafio técnico da Revi, se você chegou até aqui é porque vimos um potencial em você fazer parte do nosso time. 🔎

Queremos revolucionar a forma como as empresas interagem com os clientes no Brasil! Para isso, precisamos de pessoas excepcionais e que tenham essa mesma vontade! 🚀

Criamos esse desafio com o objetivo de avaliar as suas capacidades técnicas e de resolução de problemas, leia todos os pontos atentamente e caso surja alguma dúvida, não hesite em nos chamar 💫

Espero que goste

## Batalha de monstros

A aplicação é uma batalha de monstros, onde temos diferentes monstros com diferentes estatísticas, como ataque e defesa, por exemplo, e podemos deixá-los lutar entre si.

### Objetivos 🎯

- Implementar as seguintes funcionalidades:
    - cadastrar um monstro com as seguintes informações
        - `name` - string
        - `attack` - int
        - `defense` - int
        - `speed` - int
        - `hp` - int
        - `image_url` - string
    - criar uma batalha entre dois monstros
    - visualizar o resultado da batalha automaticamente, após o fim da batalha

---

### Algoritmo de Batalha 🤖

Para calcular o algoritmo de batalha, leve em conta o fluxo abaixo:

- O monstro com a maior velocidade faz o primeiro ataque; se ambas as velocidades forem iguais, o monstro com o maior ataque vai primeiro.
- Para calcular o dano (`damage`), subtraia a defesa do ataque (`atack - defense`); a diferença é o dano; se o ataque for igual ou menor que a defesa, o dano é 1.
- Subtraia o dano do `hp` do monstro que sofreu o ataque (`hp = hp - damage`).
- Os monstros batalharão em rounds até que um vença; todos os rounds devem ser calculados de uma vez só
- Quem vence a batalha é o monstro que subtraiu o `hp` do inimigo a zero primeiro

---

### Observações 📝

- A aplicação deve ser construída em React Js (utilizando typescript)
- NÃO é necessário a construção de um backend
- NÃO é necessário a criação de testes automatizados
- É permitido o uso de libs externas

---

### O que será avaliado? ⭐️

- Qualidade de código e uso de boas práticas
    - É muito mais fácil e satisfatório trabalhar com um código fácil de ler e entender
- Noções de UI/UX
    - Também gostamos de telas pretas, mas nossos clientes ainda não sabem usar o terminal 🙁. Por isso um design elegante e fácil conta pontos (relaxa, sabemos que você não é um designer)
- Criatividade
    - Valorizamos pessoas que busquem resolver problemas da melhor forma possível (eu disse melhor, não mais complexa!)
- Documentação
    - Readme com instruções claras sobre como rodar a aplicação
