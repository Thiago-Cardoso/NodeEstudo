
/**
 * Module dependencies.
 */

var express = require('express')
  , app = express(); 

app.configure(function(){
  app.use(express.bodyParser()); //função que facilita a construção de objetos JSON apartir de uma submissão de dados de um formulário html
  app.use(express.methodOverride()); //permite que sua aplicação faça sobrescrita de rotas que utilizem métodos HTTP diferentes, executa um parser desses valores criando o objeto JSON
});

//crio um array
var clientes = [];

//form de cadastro
app.get('/', function(req, res){
  var html  = '<html><body>';
  html += '<form action="/cliente" method="post">';
  html += '<label>Nome: <input type="text" name="cliente[nome]"></label><br>';
  html += '<label>Idade: <input type="text" name="cliente[idade]"></label><br>';
  html += '<button type="submit">Enviar</button>';
  html += '</form>';
  html += '<br>';
  html += '<h1>Lista de clientes</h1>';
  html += '<ul>';
  for(var i = 0; i < clientes.length; i++){
    html += '<li>'+clientes[i].nome+' | '+clientes[i].idade;
    html += '<a href="/cliente/'+i+'/editar">Editar</a> | ';
    html += '<a href="/cliente/'+i+'">Excluir</a></li>'; 
  }
  html += '</ul></body></html>';
  res.send(html);
});

app.post('/cliente', function(req, res){
  var cliente = req.body.cliente;
  clientes.push(cliente);
  res.redirect('/');
});

//editar form
app.get('/cliente/:id/editar', function(req, res){
  var id = req.params.id;
  var html  = '<html><body>';
  html += '<h1>Editar dados do cliente: '+clientes[id].nome+'</h1>';
  html += '<form action="/cliente/'+ id +'" method="post">';
  html += '<input type="hidden" name="_method" value="put">'; // Força o formulário realizar um comando PUT no submit.
  html += '<label>Nome: <input type="text" name="cliente[nome]" value="'+clientes[id].nome+'"></label>';
  html += '<label>Idade: <input type="text" name="cliente[idade]" value="'+clientes[id].idade+'"></label>';
  html += '<button type="submit">Enviar</button>';
  html += '</form>';
  html += '</html>';
  res.send(html);
});

//mostra os dados
app.put('/cliente/:id', function(req, res){
  var id = req.params.id;
  clientes[id] = req.body.cliente;
  res.redirect('/');
});

app.del('/cliente/:id', function(req, res){
  var id = req.params.id;
  clientes.splice(id, 1);
  res.redirect('/');
});

// Ao executar a url dessa forma: http://localhost:3000/cliente/1?nome=caio
// Através dessa rota é possível pegar os seguintes valores dessa url.
app.get('/cliente/:id', function(req, res){
  var id = req.params.id; // valor: 1
  var nome = req.query.nome; // valor: caio
  res.send('Cliente '+id+': '+nome);
});

app.listen(2000);


