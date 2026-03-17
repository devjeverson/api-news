📰 News App - Angular

### Aplicação web desenvolvida em Angular que consome uma API de notícias e exibe conteúdos atualizados em tempo real.

##🚀 Funcionalidades

Listagem de notícias em formato de cards

Consumo de API REST

Exibição de título, imagem e descrição

Redirecionamento para a notícia completa

Interface responsiva

## 🛠️ Tecnologias

Angular

TypeScript

RxJS

HTML5 + CSS3

### 🔌 Integração

A aplicação utiliza o HttpClient do Angular para consumir uma API de notícias (ex: NewsAPI), retornando dados em JSON.

## 📦 Estrutura

components/ → responsáveis pela interface

services/ → consumo da API

models/ → tipagem dos dados

▶️ Como rodar o projeto
# instalar dependências
npm install

# rodar aplicação
ng serve

Acesse: http://localhost:4200

## 📌 Observações

Necessário configurar a API Key da API de notícias

Pode ser expandido com filtros, busca e paginação

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
