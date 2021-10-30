// PASSO 1)
// git init - dar enter em tudo. Nao sei o que criar entao dei YES pra tudo
// npm init
// npm i mongoose express
// touch .gitignore

// PASSO 2)
// app.js file -> To be our server, and have all the routes we need

// config folder > db.config.js -> With a function that handle with our mongo connection

// models folder > Todo.js -> create an Schema instance and export our model Todo

//PASSO 3)
// Create a Todo model . The schema should have the following fields:

// title - Type String. It should be required.
// completed - Type Bollean, should have default false
// timestamps - use, timstamps config of mongoose

//PASSO 4)
//criei a pasta routes e deixei o app.js "limpo". Seguir criaçoes do app


//PASSO 5) fiz no routes e importei pro app
// Method	Endpoint	Payload	Response	Action
// GET	/todos	-	[todos]	Get All Todos form DB
// POST	/todos	{"title":String, "completed": Bollean}	{todo}	Create New Todo
// PUT	/todos/:id	{"title":String, "completed": Bollean}	{todo}	Update Existing Todo by Id
// DELETE	/todos/:id	-	-	Deletes todo