require('./config/config.js');
const express = require('express');

const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/usuario', function (req, res) {
    res.json('GET');
});
app.post('/usuario', function (req, res) {
    let body = req.body;
    if(body.nombre === undefined){
        res.status(400).json({
            ok:false,
            msg:"El nombre es obligatorio"
        });
    }else{
        res.status(201).json({
            perro:body
        });
    }
});
app.put('/usuario/:id', function (req, res) {
    let id = req.params.id;
    res.json({
        id
    });
});
app.delete('/usuario/:id', function (req, res) {
    let id = req.params.id;
    res.json(`Se borrara el usuario con id: ${id}`);
});
  app.listen(process.env.PORT,()=>
  {
      console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
  });