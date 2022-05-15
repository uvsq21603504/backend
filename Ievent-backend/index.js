//************************************
const sequelize = require("./util/database");

const Customer = require("./models/customer");
const Order = require("./models/order");
const Product = require("./models/product");





//****************FORMULAIRE*************/

const express = require('express');

const app = express();
app.use(express.static('./public'));

app.listen(3001, () => console.log('listening at 3000'));


const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));




 /*

app.get('/', function(req, res){
  res.sendFile(__dirname+'/index.html'); // change the path to your index.html
});*/


app.post('/user_create', (request, response) => {
  console.log(request);
  console.log("i am here" + request.body.lname);

  console.log("i am here 2 " + request.body.fname);
  console.log("i am here 2 " + request.body.email);
  console.log("i am here 2 " + request.body.phno);
  

  const nom=request.body.lname;
  const em=request.body.email;


/************************************************************************** */

const sequelize = require("./util/database");

const Customer = require("./models/customer");
const Product = require("./models/product");


Customer.hasMany(Order);// define relation between cuustumer and order
                        //hasmany association in sequelize 

Order.hasMany(Product);      
let customerId = null;
sequelize
  //.sync({force: true})
  .sync()
  .then((result) => {
    return Customer.create({name: nom, email: em})
    console.log(result);
  })
  .then(customer => {
    console.log("First Customer Created: ",customer);

    customerId = customer.id;
    console.log("First Customer Created: ",customer);
    return customer.createOrder({total: 45});
  })
  .then(order => {
    console.log("Order is : ",order);
    return Order.findAll({ where: customerId});
  })
  .then(orders => {
    console.log("All the Orders are : ",orders);
  })
  .catch((err) => {
    console.log(err);
  });});
