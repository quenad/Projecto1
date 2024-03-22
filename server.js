// Load Node modules
var express = require('express');
const ejs = require('ejs');
// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));
// Set the view engine to ejs
app.set('view engine', 'ejs');
// Port website will run on
app.listen(8080);

// *** GET Routes - display pages ***
// Root Route
app.get('/', function (req, res) {
    res.render('pages/index',{
    });
        
});
app.get('/login', function (req, res) {
    res.render('pages/login');    
});
app.get('/cadastro', function (req, res) {
    res.render('pages/cadastro');    
});
app.get('/help', function (req, res) {
    res.render('pages/help');    
});
app.get('/reserva', function (req, res) {
    res.render('pages/reserva');    
});
app.get('/sobre', function (req, res) {
    res.render('pages/sobre');    
});
app.get('/contacto', function (req, res) {
    res.render('pages/contacto');    
});
app.get('/servico', function (req, res) {
    res.render('pages/servico');    
});
app.get('/logistica', function (req, res) {
    res.render('pages/logistica');    
});
app.get('/viatura', function (req, res) {
    res.render('admin/aviatura');    
});
app.get('/utilizador', function (req, res) {
    res.render('admin/utilizador');    
});



