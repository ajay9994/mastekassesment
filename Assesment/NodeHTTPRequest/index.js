var http=require('http');
var fs=require('fs');
const port=3000;
var server=http.createServer(function(req,res){
   
    if(req.method === "GET"){
     
            res.end(`Get Request Processed`);  
        
    }
    else if(req.method === "POST"){
        res.end(`POST Request Processed`);
    }
    else if(req.method === "PUT"){
        res.end(`PUT Request Processed`);
    }
    else if (req.method === "DELETE"){
        res.end(`Delete Request Processed`);
    }

    
        
        }).listen(port,()=>{
            console.log(`http://localhost:${port}/ started`);
        });
