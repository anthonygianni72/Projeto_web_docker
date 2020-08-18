const mongoose = require('mongoose');

const DATABASE_CONECTION = 'mongodb://db/test';

var kittySchema = mongoose.Schema({
    name: String});

Kitten = exports.Kitten = mongoose.model('Kitten',kittySchema);

exports.initializeMongo = function(){
    mongoose.connect(DATABASE_CONECTION);

    console.log('tetando conexao em :'+ DATABASE_CONECTION);

    var db = mongoose.connection;
    db.on('error',console.error.bind(console,'coneccao deu erro boy!'));
    db.once('open',function(){
        console.log('varei kkkk');
        addRandonCat();
    });
}

var addRandonCat = function(){
    var silence = new Kitten({
        name: 'Silence' + Math.random()
    });
    silence.save(function(err,fluffy){
        if (err) return console.error(err);
        console.log('este é um novo num sei oq do varei kkk')
    });
}