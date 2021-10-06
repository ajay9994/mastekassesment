const express=require('express');
const server=express();
const port=3000;
server.use(express.json());
server.use(express.urlencoded({extended:true}));
//GET Request
server.get('/',(req,res)=>{
    res.send('Get Request Processed');
});
//GET Request
server.get('/get',(req,res)=>{
    res.send('Get Request Processed');
});
//POST Request
server.post('/post',(req,res)=>{
    res.send('Post Request Processed');
});
//PUT Request
server.put('/put',(req,res)=>{
    res.send('Put Request Processed');
});
//DELETE Request
server.delete('/delete',(req,res)=>{
    res.send('Delete Request Processed');
});

server.listen(port,()=>{
    console.log(`http://localhost:${port}/ started`);
})


