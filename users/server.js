const express=require('express');
const app=express();
const port=8001;
app.use('/',(req,res)=>{

res.status(200).json({message:'hello user api'})

})

app.listen(port,()=>{

console.log('user server has been start with port'+port);

});