const sqlite3 = require('sqlite3');
const express = require('express');
var cors = require('cors')
const app = express();

app.use(cors())

const sha1 = require('sha1');
let db = new sqlite3.Database('test.db' , err => {
    if(err)
        throw err
    else
    console.log('Database connected ');
});

app.get('/:email_client/:pass_client', function(req, res) {
    let email_client = req.params.email_client;
    let pass_client  = req.params.pass_client;
    pass_client = sha1(String(pass_client));
    console.log(`request : ${email_client} ${req.params.pass_client} ${pass_client} `)
    let query = `SELECT * FROM Clients WHERE email_client = "${email_client}" AND pass_client = "${pass_client}"`;
    db.all(query, function(err,rows){
        if(err){
            res.json({status:"404"});
        }
        else{
            rows.forEach((row) => {
                console.log(row)
                res.json(row);
              });
        }   
    });
  

    
});

const port = process.env.PORT || 4200;
app.listen(port,() => console.log(`You are connected port : ${port}`));