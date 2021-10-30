const express = require('express');

const routes = require('./routes/routes');

const app = express();


app.use(express.json()); //criei o Midleware pra perapar o express pra receber Json pelo body(nao sei pq exatamente)
app.use('/', routes); //todo request a partir da rota /, ele vai procurar

app.listen(5000, () => console.log('App rodando na porta 5000'));

