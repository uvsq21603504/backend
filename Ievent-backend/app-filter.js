const sequelize = require("./util/database");

const Customer = require("./models/customer");
const Order = require("./models/order");
const Product = require("./models/product");
const path = require("path")


const express = require('express')
const app = express()
//app.use(express.static(__dirname + "/assets"));/* Connect to public folder */


app.use(express.static('public'))


const port = 3005
app.set('view engine', 'ejs')
console.log(path.join(__dirname))
app.set('views', path.join(__dirname))


//***************FILTERS Acceuil promo nouveauté******************* */
const test = async()=> {
  return( await Product.findAll({where : { promo : {[Op.gt] : 0}}}));
}
/*
app.get('/', (req, res) => {
  test().then(products=> {
    
    console.log(products);
    
   
  res.render('articles.ejs', {

      articles: products
  }) }
  );
});*/

/********FILTRE PROMO********** */
var Sequelize = require('sequelize');

const Op = Sequelize.Op;

async function filterPromo(prix)
{
const products = await Product.findAll({where : { promo : {[Op.gt] : 0 }}});
console.log(products.every(product => product instanceof Product)); // true
console.log("All products : ", JSON.stringify(products, null, 2));
}

app.get('/', (req, res) => {


  test().then(products=> {
    
    console.log(products);
    
   
  res.render('articles.ejs', {

      articles: products
  }) });
});








async function testFilterCat2(cat)
{

  return( await Product.findAll({where : { categorie : cat} }));


}

app.get('/articles/:cat', (req, res) => {
    var cat = req.params.cat;
    console.log(cat);

    testFilterCat2(cat).then(products=> {
    console.log(products);
    
      // page ejs  
      res.render('film', {

      articles: products
  }) }
  );
});




/*************MARCHE MAI*************** */
/*
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