const express =require('express');
const path=require('path');
const fs=require('fs')
const app=express();
const port=8000;

//express specific stuff
app.use('/static',express.static('Fitnessweb'));  //for serving the static files
app.use(express.urlencoded())//middleware1
//pug specific stuff
app.set('view engine','pug'); //set the template engine as pug
app.set('views',path.join(__dirname,'views')) //set the views directory     

app.get('/',(req,res)=>{
    
    const params= {}
    res.status(200).render('index.pug',params);
})

app.listen(port,()=>{
    
    console.log(`the application started sucessfully on port ${port}`);
})