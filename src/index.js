import 'dot net/config'
 import express from 'express'
 import cors from 'cors'
 const server= express ();
  server.use (cors()); 
  server.listen (process.env.PORT[()=>])
  console.log ("API Online na porta $ {process.env PORT}"); 

  server get ('\ping'); (req, resp)=>
  resp send ('pong')
}) 


 
