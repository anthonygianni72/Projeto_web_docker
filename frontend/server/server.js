let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let pg = require('pg');
let cors = require('cors');
// const { Pool } = require('pg');
// const pool = new Pool()

const PORT = 3000;

let pool = new pg.Pool({
    user:'postgres',
    database: 'testCRUD',
    password:'postgres',
    host:'localhost',
    port:5432,
    max:10
});

let app = express();
app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(morgan('dev'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.delete('/api/remove/:id',function(request,response){
    var id = request.params.id;
    pool.connect(function(err,db,done){
        if(err){
            return response.status(400).send(err);
        }
        else{
            db.query('DELETE FROM login WHERE usuario.id = $1',[Number(id)],function(err,table){
                done();
                if(err){
                    return response.status(400).send(err)
                }
                else{
                    return response.status(200).send({message:"deletado"})
                }
            })
        }
    })
})
app.get('/api/usuario',function(request,response){
    pool.connect(function(err,db,done){
        if(err){
            return response.status(400).send(err);
        }
        else{
            db.query('SELECT * FROM login',function(err,table){
                done();
                if(err){
                    return response.status(400).send(err)
                }
                else{
                    return response.status(200).send(table.rows)
                }
            })
        }
    })
})
app.post('/api/new-login',function(request,response){
    console.log('cheguei dinovo')
    console.log(request.body);
    var login_name= request.body.login_name;
    pool.connect((err,db,done)=>{
        if(err){
            return console.log(err);
        }
        else {
            
            
            db.query('INSERT INTO login (usuario) VALUES ($1)',[login_name],(err,table) => {
                done();
                if(err){
                    return console.log(err)
                }
                else {
                    console.log(table.rows)
                }
            })
        }
    })
})

app.listen(PORT,()=>console.log('Listen on port'+ PORT));