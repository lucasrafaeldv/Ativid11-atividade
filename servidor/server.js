const express = require("express")
const pedido = require("../dados.json")


const mostrarPedidos = (req, res) => {
    res.send(pedido)
}

const inventario = (req, res) => {
    const id = req.params.id

    pedido.forEach((item) => {
        if (item.id == id){
            res.send(item)
        }
    })
    res.status(404).send("item não existe")
    
}

const novoPedido= (req, res) => {
    if (req.body) {
        const novoID = pedido.length + 1
        req.body.id = novoID
        res.send("pedido recebido")
        pedido.push(req.body)
    } else {
        res.send("erro ao receber pedido")
    }
}

const alterarPedido = (req, res) => {
    const id = req.params.id;
    const dados = req.body; 

    pedido.forEach((pedido) => {
        if(pedido.id == id) {
            pedido.id = dados.id
            pedido.item = dados.item
            pedido.local = dados.local
            pedido.dataRegistro = dados.dataRegistro
            pedido.valor = dados.valor
        }
    });
    res.send("Pedido atulizado com sucesso");
}

const exluirPedido = (req, res) => {
    const id= req.params.id
    
    pedido.forEach((pedidos, indice) => {
        if(pedidos.id == id){
            pedido.splice(indice, 1)
        }
    })
    res.send("pedido excluido com sucesso")
}

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const porta = 3000

app.get("/", mostrarPedidos)
app.get("/:id", inventario)
app.post("/", novoPedido)
app.put("/:id", alterarPedido)
app.delete("/:id", exluirPedido)

app.listen(porta, () => {
    console.log(`Servidor respondendo em: http://localhost:${porta}`)
})