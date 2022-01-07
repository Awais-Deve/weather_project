const express = require('express');
const app = express();
const path =require('path');
const hbs = require('hbs');
const port = process.env.PORT || 8000;

// SERVING STATIC FILES
const static_path = path.join(path.resolve(__dirname),'public');
app.use(express.static(static_path));

// SETTING VIEW ENGINE
const view_path = path.join(path.resolve(__dirname),'src/templates/views');
const partial_path = path.join(path.resolve(__dirname),'src/templates/partials');
app.set('view engine','hbs');
app.set('views',view_path);
hbs.registerPartials(partial_path);

// ROUTING  
app.get('/',(req,res)=>{
    res.render('index',{
        title:'Home'
    });
});
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'about'
    });
});
app.get('/weather',(req,res)=>{
    res.render('weather',{
        title:'Weather'
    });
});
app.get('*',(req,res)=>{
    res.render('404',{
        title:'404!Error'
    });
});

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})