const sequelize = require("./util/database");

const Customer = require("./models/customer");
const Order = require("./models/order");
const Product = require("./models/product");


Customer.hasMany(Order);// define relation between cuustumer and order
                        //hasmany association in sequelize 

let customerId = null;

sequelize
  //.sync({force: true})
  .sync()
  .then(product => {
    console.log("********************1**************************");
    console.log("Order is : ",product);
    return Product.findAll();

  }).then(products => {
    console.log("*****************2*****************************");
    console.log("Order is 2 : ",products);

  })
  .catch((err) => {
    console.log(err);
  });

//***************************************************SELECT *  FROM PRODUCT ==> AFFICHER TOUT LES PRODUITS*/
/*
async function test()
{
const products = await Product.findAll();
console.log(products.every(product => product instanceof Product)); // true
console.log("All products : ", JSON.stringify(products, null, 2));
}

test();

*/
//***************************************************SELECT *  FROM PRODUCT ==> AFFICHER TOUT LES PRODUITS SELON LA CATEGORIE*/
/*
async function filterCategorie(cat)
{
const products = await Product.findAll({where : { categorie : cat}});
console.log(products.every(product => product instanceof Product)); // true
console.log("All products : ", JSON.stringify(products, null, 2));
}

filterCategorie('MUSIC');*/

//***************************************************SELECT *  FROM PRODUCT ==> AFFICHER TOUT LES PRODUITS QUI NE DEPASSENT PAS UN PRIX */
/*
var Sequelize = require('sequelize');

const Op = Sequelize.Op;

async function filterPrice(prix)
{
const products = await Product.findAll({where : { price : {[Op.lte] : prix}}});
console.log(products.every(product => product instanceof Product)); // true
console.log("All products : ", JSON.stringify(products, null, 2));
}

filterPrice(25);*/

//*********************************************SELECT *  FROM PRODUCT ==> AFFICHER TOUT LES PRODUITS DANS UNE PERIODE DONNEE  */
/*var Sequelize = require('sequelize');

const Op = Sequelize.Op;

//const products = await Product.findAll({where : { createdAt : {[Op.between]: [ new Date(new Date() + month * 60 * 60 * 1000)}}});
var today = new Date();

const OneDaysFromNow = new Date(new Date().setDate(new Date().getDate() + 1));
const sevenDaysFromNow = new Date(new Date().setDate(new Date().getDate() + 7));
const monthFromNow = new Date(new Date().setDate(new Date().getDate() + 30));
const six_monthsFromNow = new Date(new Date().setDate(new Date().getDate() + 30 * 6));
const year_FromNow = new Date(new Date().setDate(new Date().getDate() + 365));

async function filterDate(periode)
{                                                      

const products = await Product.findAll({where : { D : {[Op.between]:[new Date(), periode]}}});
console.log(products.every(product => product instanceof Product)); // true
console.log("All products : ", JSON.stringify(products, null, 2));
}

filterDate(six_monthsFromNow);*/
