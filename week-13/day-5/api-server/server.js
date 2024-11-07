const express = require("express");
const productRouter = require('./routes/productsRouter.js')
const usersRouter = require('./routes/usersRouter.js')

const app = express();

// app.use(express.urlencoded({extended:true}))
app.use(express.json());

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

app.use('/products', productRouter)
app.use('/users', usersRouter)







/**
 * server 
 *  |_ config - connections to databases
 *  |_ models - queries to dtabase / files
 *  |_ controllers - function to implemnts code - req, res
 *  |_ routes - routes for API
 *  |_ middlewares - function - req - middleware - res 
 */