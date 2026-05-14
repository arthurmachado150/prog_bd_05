const express = require('express')
const app = express()
const cors = require('cors')

const hostname = 'localhost'
const PORT = 3000

const conn = require('./db/conn')
const veiculoController = require('./controller/veiculos.controller')

// --- middleware ----
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
// --------- Rotas -------

app.post('/veiculo', veiculoController.cadastrar)

// ------ Servidor ----
conn.sync()
.then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`Servidor rodando em http://${hostname}:${PORT}`)
    })
})
.catch((err)=>{
    console.error('Erro de conexão com o banco de dados!',err)
})