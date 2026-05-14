const Veiculos = require('../models/Veiculos')

const cadastrar = async (req,res)=>{
    const valores = req.body
    console.log(valores)

    let precoVenda = 0.0

    if(valores.categoria === 'popular'){
        precoVenda = valores.precoFab * 1.15
    }else if(valores.categoria === 'sedan'){
        precoVenda = valores.precoFab * 1.20
    }else if(valores.categoria === 'luxo'){
        precoVenda = valores.precoFab * 1.25
    }

    const valores2 = {
        nome: valores.nome,
        marca: valores.marca,
        categoria: valores.categoria,
        ano: valores.ano,
        precoFab: valores.precoFab,
        precoVenda: precoVenda
    }

    try{
        await Veiculos.create(valores2)
        res.status(201).json({message: 'Dados do veículo cadastrados com sucesso!'})
    }catch(err){
        res.status(500).json({message: 'Não foi possível cadastrar os dados do veículo!'})
        console.error('Não foi possível cadastrar os dados do veículo!',err)
    }
}

module.exports = { cadastrar }