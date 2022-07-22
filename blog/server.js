const express=require('express');
const app=express();
const port=8002;

app.use('/',(req,res)=>{

    res.status(200).json({message:'blog api working fine'})

})
app.listen(port,()=>{

    console.log('server start for blog port= '+port)

})