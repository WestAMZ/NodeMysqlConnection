const dbConnection = require('../../config/dbConnection');
 module.exports = (app) =>
 {
    const connection = dbConnection() 
    app.get('/',(req,res)=>
    {
        connection.query('SELECT * FROM news',(err,result)=>
            {
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    //console.log(result);
                    res.render("news/news",{news:result});
                }
            });
    });
    app.post('/news',(req,res)=>
    {
        
        const {title,news} = req.body;
        connection.query('INSERT INTO news SET?',{title,news},(err,result)=>
        {
            res.redirect('/');
        });
    });
    /*
    Imprime en consola el objeto que se envia
    console.log(req.body);
    dado que atributos pasados a set se llaman igual se podria dejar
    {title,news} en lugar de {title:valor,news:valor}
    NOTA: no poner nombre de constantes identicos a campos de tabla (title:title) no funciona
    */
 }