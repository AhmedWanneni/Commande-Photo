var express = require('express');
const stripe = require('stripe')('sk_test_51Hu2WdGWVHfcK8xagzoOJD1kiapstapSUk70sBYnolHq3OGe1yhuUtDwC7SIf2i4ENldLxFFhZr5Kuhh0uTSe5Fv00yWODHQVR');
var app = express();
var cors = require('cors');
app.use(cors());
var bodyParser = require('body-parser')
app.get('/Cree/:email/:nom/:desc',(req,res) => {
  let email = req.params.email;
  let nom = req.params.nom;
  let desc = req.params.desc;
  var param ={};
  param.email =email;
  param.name=nom;
  param.description=desc;

  stripe.customers.create(param, function (err,customer) {
      if(err)
        res.json({status:"404"});
      if(customer)
        res.json(customer);
      else
        res.json({status:"404"});
  });

});

app.get('/Ajouter/:id_cus',(req,res) => {
  let id_cus = req.params.id_cus;
  
  stripe.customers.retrieve(id_cus, function (err,customer) {
    if(err)
      res.json({status:"404"});
    if(customer)
      res.json(JSON.stringify(customer, null, 2));
    else
      res.json({status:"404"});
  });
});

app.get('/CreeToken/:num_card/:month/:year/:adress/:cvc',(req,res) => {
  let num_card = req.params.num_card;
  let month = req.params.month;
  let year = req.params.year;
  let adress = req.params.adress;
  let cvc = req.params.cvc;
  
  var param = {};
  param.card ={
      number: num_card,
      exp_month: month,
      exp_year:year,
      cvc:cvc,
      address_line1 : adress
  }

  stripe.tokens.create(param, function (err,token) {
      if(err)
        res.json({status:"404"});
      if(token)
        res.send(JSON.stringify(token));
      else
        res.send("Something wrong");
  });

});

app.get('/AjouterCard/:cus_id/:token_id/',(req,res) => {
  let cus_id = req.params.cus_id;
  let token_id = req.params.token_id;
  stripe.customers.createSource(cus_id,{source: token_id}, function (err,card) {
    if(err)
      res.json({status:"404"});
    if(card)
      res.json(JSON.stringify(card, null, 2));
    else
      res.send("Something wrong");
});
});

app.get('/Payer/:amount/:currency/:desc/:token_id' , (req,res) => {
  let amount = req.params.amount;
  let currency = req.params.currency;
  let desc = req.params.desc;
  let token_id = req.params.token_id;
  var param = {
    amount: amount,
    currency: currency,
    description:desc,
    source:token_id
}

stripe.charges.create(param, function (err,charge) {
    if(err)
      res.json({status:"404"});
    if(charge)
        res.json(JSON.stringify(charge, null, 2));
    else
        res.send("Something wrong")
    
})
});




app.listen(3000, function () {
  console.log("server running");
});
// Tout les client

var getAllCustomers = function () {
stripe.customers.list({limit: 4},function (err,customers) {
      if(err)
        console.log("err: "+err);
      if(customers)
        console.log("success: "+JSON.stringify(customers.data, null, 2));
      else
        console.log("Something wrong")
      });
}

getAllCustomers();