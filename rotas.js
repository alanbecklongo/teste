const express = require ("express")
const routes = express.Router()

let lista = [   {"id":1,"nome":"Alan","idade":25},
                {"id":2,"nome":"Laura","idade":20},
                {"id":3,"nome":"Maria","idade":45}  ]

routes.get("/",(req,res)=>{
    res.status(200).json(lista)
})

routes.get("/:id",(req,res)=>{
    res.status(200).json(lista[req.params.id-1])
})
routes.delete ("/:id",(req,res)=>{
    lista.splice (req.params.id-1,1)
})


module.exports = routes 
