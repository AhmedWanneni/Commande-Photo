const sqlite3 = require('sqlite3');
const express = require('express');
const app = express();
const sha1 = require('sha1');
let db = new sqlite3.Database('test.db' , err => {
    if(err)
        throw err
    else
    console.log('Database connected ');
});


app.get('/:nom_client/:email_client/:pass_client', function(req, res) {
    let nom_client = req.params.nom_client;
    let email_client = req.params.email_client;
    let pass_client  = req.params.pass_client;
    pass_client = sha1(String(pass_client));
    db.run('INSERT INTO Clients(nom_client,email_client,pass_client) VALUES(?,?,?)',
            nom_client,email_client,pass_client);
    res.send('data is set');
});
const port = process.env.PORT || 4200;
app.listen(port,() => console.log(`You are connected port : ${port}`));





