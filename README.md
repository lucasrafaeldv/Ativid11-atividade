API de Inventário

Projeto desenvolvido para a Aula 07, com o objetivo de criar um backend RESTful para gerenciamento de inventário de patrimônio.

A aplicação permite realizar operações de cadastro, consulta, atualização e exclusão de itens, utilizando um arquivo JSON para armazenamento dos dados.

Tecnologias

Node.js

Express

JavaScript

JSON

Funcionalidades

Cadastro de itens

Listagem de itens

Consulta por ID

Atualização de itens

Exclusão de itens

Armazenamento em arquivo JSON

Rotas
Método	Rota	Função
POST	/inventario	Cadastrar item
GET	/inventario	Listar itens
GET	/inventario/:id	Consultar item
PUT	/inventario/:id	Atualizar item
DELETE	/inventario/:id	Excluir item
Execução

Instale as dependências:

npm install


Inicie o servidor:

npm start


A API será executada localmente conforme a configuração do projeto.

Armazenamento

Os dados são armazenados no arquivo inventario.json, utilizado como uma base de dados temporária para a aplicação.

Testes

As operações da API foram testadas utilizando as rotas de CRUD, incluindo criação, consulta, atualização e exclusão de registros.
