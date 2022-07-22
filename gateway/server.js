const express=require('express');
const app=express();
const gateway=require('fast-gateway');
const port=9000;

const server=gateway({

routes:[
    {
        prefix:'/user',
        target:'http://localhost:8001/'

    },
    {
        prefix:'/blog',
        target:'http://localhost:8002/'

    }
]

});

server.use('/testgateway',(req,res)=>{

    res.send('ok gateway serevr ready for microservice')
})

server.start(port,()=>{

    console.log('gateway server running in port= '+port)
})