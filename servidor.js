const express= require ("express")

const server = express()

server.use(express.json())
server.use(express.urlencoded({extended:true}))

server.listen(3000,()=>{
    console.log("Servidor em execução...")
})