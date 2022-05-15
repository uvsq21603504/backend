const sequelize = require("./util/database");

const Customer = require("./models/customer");
const Order = require("./models/order");
const Product = require("./models/product");


const express = require('express')
const app = express()
const port = 3003
app.set('view engine', 'ejs')


//***************  ALL PRODUCT******************* */

const test = async()=> {
  return( await Product.findAll({
    attributes: ['name','description','D','price']
  }));
}



app.get('/articles', (req, res) => {
  test().then(products=> {
    
    console.log(products);
    
   
  res.render('articles', {

      articles: products
  }) }
  );
});



/*************MARCHE MAI*************** *//*
Product.findAll({
  attributes: ['id', 'name','description']
}).then(products => { 
  console.log(products); 
  app.get('/articles', (req, res) => {
    res.render('articles', {
        articles: products
    })
})
});*/

//********************************** */



app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})