<p align="center">
  <img alt="Icone de servidor" src="./.github/api.png" width="100"/>
</p>
<h1 align="center">
  Backend plantinhas
</h1>

<!-- Badges -->
<p align="center">

  <!-- if your app is a website -->
  <a href="https://plantinhas-backend.herokuapp.com/" alt="Url do site">
    <img src="https://img.shields.io/website-up-down-1EAE72-red/http/shields.io.svg" />
  </a>

  <!-- License -->
  <a href="./LICENSE" alt="License: MIT">
    <img src="https://img.shields.io/badge/License-MIT-1EAE72.svg" />
  </a>

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/jpalvesl/backend-plantinhas?color=blue">

  <!-- GitHub repo size -->
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/jpalvesl/backend-plantinhas">

  <!-- Social -->  
  <a href="https://github.com/jpalvesl/backend-plantinhas/stargazers">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/jpalvesl/backend-plantinhas?style=social">
  </a>

</p>

<!-- summary -->
<p align="center">
  <a href="#clipboard-descrição">Descrição</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-iniciando-o-projeto">Iniciando o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-o-que-tem-dentro">O que tem dentro?</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>


## :clipboard: Descrição
API criada para ser conectada com o [aplicativo mobile](https://github.com/jpalvesl/plantinhas-app) e tem como finalidade, armazenar plantas cadastradas, para que elas possam ser organizadas de diferentes formas (por data, local de coleta etc) e a partir dessa api gerar arquivos excel para que o trabalho de catalogação de plantas não fique tão repetitivo

## :rocket: Iniciando o projeto

1. Baixando o repositório

  - Usando Git
```shell
  git clone https://github.com/jpalvesl/backend-plantinhas.git
```
  - Usando Github CLI
```shell
  gh repo clone jpalvesl/backend-plantinhas
```
  - Rodando com o gitpod  
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/https://github.com/jpalvesl/backend-plantinhas)


  > :bulb: ou qualquer outra maneira que você preferir

2. Instalando e executando
  - Usando npm
```shell
  npm install
  npm run start
```
  - Usando yarn
```shell
  yarn
  yarn start
```

3. Obtendo documentação das rotas   
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Plantinhas%20API&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fjpalvesl%2Fbackend-plantinhas%2Fmaster%2Fexports.json)

## 🧐 O que tem dentro?

### :building_construction: Tecnologias
- [NodeJS](https://nodejs.org/en/)


### :package: Pacotes
- [Celebrate](https://github.com/arb/celebrate)
- [Cors](https://expressjs.com/en/resources/middleware/cors.html)
- [Express](https://expressjs.com/pt-br/)
- [Mongoose](https://mongoosejs.com)


## :memo: Licença

This project is under the MIT license. See the file [LICENSE](LICENSE) for more details.

---

Feito com 💙 Por [João Lima](https://github.com/jpalvesl)

Based on the [readme template](https://gist.github.com/henry-ns/a00234378353d9ca43e1bfe043202192) by [Henrique Miranda](http://thehenry.dev/)
