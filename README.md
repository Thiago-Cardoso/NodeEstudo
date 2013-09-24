Testes meus feitos com Nodejs(base site - http://udgwebdev.com/nodejs/)
=========


Instalando NodeJS no Ubuntu:

1. Primeiro você precisa instalar algumas bibliotecas

sudo apt-get install g++ curl libssl-dev apache2-utils
2. Download

O NodeJS pode ser encontrado em http://www.nodejs.org/ ou diretamente pelo link http://nodejs.org/dist/node-v0.2.6.tar.gz (versão 0.2.6).

3. Extraindo

Para extrair o conteúdo do arquivo execute:

tar -xf node-v0.2.6.tar.gz
4. Compilando e Instalando

Acesse a pasta que se encontram os arquivos instalados e execute os comandos por ordem:

./configure
make
sudo make install
Se tudo ocorreu bem o NodeJS está instalado em seu Ubuntu linux, vamos construir um ‘Hello Node’.

Exemplo 1:

1. Crie um arquivo chamado hello.js com o seguinte código:

console.log("Hello Node!");
2. No terminal de sistema localize o arquivo e rode utilizando o comando:

node hello.js
- See more at: http://vinteum.com/instalando-nodejs-no-ubuntu/#sthash.hIFRDMSZ.dpuf

demais info: 
http://vinteum.com/instalando-nodejs-no-ubuntu/
http://jaydson.org/nodejs-instalacao/
http://mateussouzaweb.com/blog/nodejs/tutorial-instalando-nodejs-no-windows

Testando a aplicação
exemplo
cd processo
node app.js

http://localhost:3000/

chat
chat-nodejs
porta 8081
http://localhost:8081/

node_chat-master
porta 8081
http://localhost:8081/