const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost:27017/todo-api')
.then(() => 'conectado ao banco de dados')
.catch((error) => console.log('erro ao conectar ao banco', error));