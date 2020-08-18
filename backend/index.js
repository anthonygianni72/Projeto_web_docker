const express=require('express');
const database = require('./database')


const PORT = 3000;
const HOST = "0.0.0.0";

const app = express();

database.initializeMongo();

app.get('/',(req,res)=>{
    res.send('Hello world!asasa');
});

app.listen(PORT,HOST);
app.get('/testFind',function(req,res){
    database.Kitten.find(function(err,kittens){
        if(err) return res.error(err);
        console.log(kittens);
        res.json(kittens);
    })
})