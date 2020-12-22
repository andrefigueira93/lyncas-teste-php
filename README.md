# Teste para Dev PHP

[![Lyncas Logo](https://img-dev.feedback.house/TCo5z9DrSyX0EQoakV8sJkx1mSg=/fit-in/300x300/smart/https://s3.amazonaws.com/feedbackhouse-media-development/modules%2Fcore%2Fcompany%2F5c9e1b01c5f3d0003c5fa53b%2Flogo%2F5c9ec4f869d1cb003cb7996d)](https://www.lyncas.net)
### Tecnologias Utilizadas
- ``Laravel``
- ``React.js``
- ``Typescript``
- ``Tailwind.css``

### Passo a Passo para instalação

Para utilizar o projeto corretamente, é necessário que a máquina possua:
- ``PHP 7.3``
- ``Composer``
- ``Node.js v14+ LTS``
- ``yarn``

## Preparação do BackEnd - Laravel

1. Após estar com PHP e Composer devidamente configurados na máquina, você deve acessar a pasta Backend, copiar o arquivo ``.env.example`` para ``.env`` e configurar as variáveis de ambiente para a sua necessidade.
   
2. Executar o comando ``composer install`` para instalar as dependências do projeto.

3. Configurar o caminho absoluto para o arquivo ``database.sqlite`` incluído na pasta ou configurar conexão de preferência e executar as migrations utilizando ``php artisan migrate``.
   
4. Se tudo correu certo, basta apenas executar ``php artisan serve`` para iniciar o servidor que estará escutando no endereço ``http://127.0.0.1:8000``.

###
OBS :: O projeto está pré-configurado para ouvir este endereço padrão. Caso haja alterações, lembre-se de corrigir no arquivo ``"frontend/src/services/api.ts"``
###

## Preparação do FrontEnd - React.js

1. Após haver instalado corretamente o ``Node.js`` em sua versão estável mais atual, instalar o pacote ``yarn``.

2. Acesse a pasta Frontend, e execute o comando ``yarn``.

3. Se tudo correu certo, o projeto já deve estar rodando no endereço local ``http://localhost:3000`` 

### O que você deve desenvolver
- [ ] Descrever suas dificuldades e facilidades, bem como o número de horas de desenvolvimento.
  
- [x] A comunicação com o Google Books API deve ser feita utilizando um HttpClient padrão, feito na mão e sem o uso de qualquer library.


### O App deve conter as seguintes páginas:
- [x] Pesquisa
- [x] Meus favoritos

### Funcionalidades

1. [x] Pesquisar livros no Google books e exibir em tela (com a foto e descrição resumida) -
2. [x] Salvar livros em uma lista de "meus favoritos" (localmente na base escolhida)
3. [x] Listar e excluir livros favoritos
4. [x] Exibir alerta de confirmaçao de exclusão