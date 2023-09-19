const express = require('express');
const morgan = require ('morgan');
const app = express();
const fs = require('fs');
const { encodingExists } = require('iconv-lite');


app.listen(9005); 


// REGISTERING VIEWS ENJINE
app.set('view engine', 'ejs');

    // SERVING PUBLIC ASSETS
    app.use(express.static('public'));
        // LOGGER
        app.use(morgan('dev'));

        // FILESYSTEM DECLARATION FOR TXT FILE
        
        fs.readFileSync('./public/lawfulpath.txt',  'utf-8' , (err,data) => {
            if(err){
                console.error(err);
            }
            console.log(data);
        });

        


// PAGE ROUTE DECLARATIONS

app.get('/', (req,res) => {
res.render('index', {title:'Maxims for a Lawful Path'});
})

// 404 PAGE

app.use(function (req, res) {
res.status(404).render('404', {title:'Page Not found'});

})