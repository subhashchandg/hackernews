const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>Hello World</h1>');
})
app.listen(3000,()=>{
    console.log("The Server started on port 3000");
})