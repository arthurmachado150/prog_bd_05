let resposta = document.getElementById('resposta')
let btnCadastrar = document.getElementById('btnCadastrar')

btnCadastrar.addEventListener('click', (e)=>{
    e.preventDefault()
    let nome = document.getElementById('nome').value
    let marca = document.getElementById('marca').value
    let categoria = document.getElementById('categoria').value
    let ano = Number(document.getElementById('ano').value)
    let precoFab = Number(document.getElementById('precoFab').value)

    const valores = {
        nome: nome,
        marca: marca,
        categoria: categoria,
        ano: ano,
        precoFab: precoFab
    }


    fetch('http://localhost:3000/veiculo',{
        method: 'POST',
        headers: { 'Content-Type':'application/json'},
        body: JSON.stringify(valores)
    })
    .then(res=> res.json())
    .then(dados =>{
        resposta.innerHTML = ''
        resposta.innerHTML += dados.message
    })

})