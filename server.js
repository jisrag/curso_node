const express = require ('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', ( req, res, next ) => {
    res.send('Hola desde express');
});

app.get('/mi_ruta', ( req, res, next ) => {
    const {nombre, edad} = req.query;
    console.log(req.query);
    res.send(`Holal ${nombre}, tienes  ${edad} años`);
});

app.get('/mi_parametro/:nombre/:edad', ( req, res, next ) => {
    const {nombre, edad} = req.params;
    res.send(`Holal ${nombre}, tienes  ${edad} años`);
});

app.listen(port, () =>{
    console.log(`Servidor en el puerto ${port}`);
})