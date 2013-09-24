var express = require('express')
  , app = express(); 

app.configure(function(){
	// Informa o subdiretório das views.
  app.set('views', __dirname + '/views');
  // Informa o template engine de renderização das views (Framework EJS)
  app.set('view engine', 'ejs');
	// Manipula layouts, o EJS não possui esse recurso então deixe false.
  app.set('view options', {layout: false});
  app.use(express.bodyParser());
  app.use(express.methodOverride());
});

//crio um array
var clientes = [];

app.get('/', function(req, res){
  res.render('index', {clientes: clientes});
});

app.post('/cliente', function(req, res){
  var cliente = req.body.cliente;
  clientes.push(cliente);
  res.redirect('/');
});

app.get('/cliente/:id/editar', function(req, res){
  var id = req.params.id;
  res.render('edit', {cliente: clientes[id], id: id});
});

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

app.listen(3000);