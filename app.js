const express = require('express')
const path = require('path')
const app = express()
const port = 3030



app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', 'index.html')))
app.get('/baggage', (req,res) => res.sendFile(path.join(__dirname, 'views', 'baggage.html')))
app.get('/berners-lee', (req,res) => res.sendFile(path.join(__dirname, 'views', 'berners-lee.html')))
app.get('/clarke', (req,res) => res.sendFile(path.join(__dirname, 'views', 'clarke.html')))
app.get('/hamilton', (req,res) => res.sendFile(path.join(__dirname, 'views', 'hamilton.html')))
app.get('/hopper', (req,res) => res.sendFile(path.join(__dirname, 'views', 'hopper.html')))
app.get('/lovelace', (req,res) => res.sendFile(path.join(__dirname, 'views', 'lovelace.html')))
app.get('/turing', (req,res) => res.sendFile(path.join(__dirname, 'views', 'turing.html')))

/*Recursos estaticos*/
app.use(express.static('public'))


/* Rutas*/
app.listen(port, () => console.log('Server running in http://localhost:' +port))
