# custom-select

## README English Version
For the english version of README.md you can access [README-en.md](https://github.com/dergeister/custom-select/blob/main/README-en.md).

## Descrição
Projeto inspirado pelo video [The Perfect Project For Your Portfolio](https://www.youtube.com/watch?v=Fc-oyl31mRI) do canal [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified) onde o objetivo é construir um select customizado.

O vídeo mostra como criar um select customizado em javascript com interações do teclado para escolher opções com setas e selecionar uma opção com base no que foi digitado. Além disso, eu decidi fazer o seguinte:
- Criar um componente React em Typescript ao invés de utilizar javascript puro.
- Pesquisar estados do Brasil da API do IBGE.
- Fazer melhorias visuais no componente.
- Filtrar opções com base no que for digitado.

### React e Typescript
Queria praticar mais React e Typescript e parecia uma oportunidade boa fazer o **custom-select** utilizando-os.

### API do IBGE
Utilizei Axios para fazer a request de estados na API do IBGE.

### CSS
Selects padrões são muito limitados em sua personalização e existiam alguns pontos que eu gostaria de customizar visualmente com isso aproveitei a oportunidade para arredondar as bordas, incluir sombreamento, barra de rolagem personalizada e alternancia do ícone da seta que indica se o select está aberto ou fechado.

## Melhorias
Possíveis melhorias para o projeto:
- Impedir interação durante a requisição à API do IBGE