<div align="center">
<h1>Curso Full Cycle 2.0</h1>
</div>
<div align="center">
    <p>
        <a href="https://github.com/beerandcodeteam/adoteumdev/blob/main/LICENSE">
            <img alt="GitHub" src="https://img.shields.io/github/license/beerandcodeteam/adoteumdev" alt="License" style="max-width:100%;" />
        </a>
        <a href="https://github.com/beerandcodeteam/adoteumdev/commits/main">
            <img src="https://img.shields.io/github/last-commit/beerandcodeteam/adoteumdev" alt="GitHub last commit" style="max-width:100%;" />
        </a>
        <img src="https://img.shields.io/github/repo-size/beerandcodeteam/adoteumdev" alt="Repo Size" />
        <img src="https://img.shields.io/github/downloads/beerandcodeteam/adoteumdev/total" alt="Total Downloads" style="max-width:100%;" />
    </p>
</div>

## Desafio NGINX e Node
Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

## Executando

````
docker-compose up -d
````