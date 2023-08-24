 type produto = {
        id: Number, 
        nome: String,
        preco: Number
    }

const Array = (():produto[] => {

    const produtos: produto[] = []
    
    produtos.push({id: 1, nome: 'Walking Dead', preco: 149.99})
    produtos.push({id: 2, nome: 'Walking Machine', preco: 132.99})
    produtos.push({id: 3, nome: 'PS5', preco: 2599.99})
    produtos.push({id: 4, nome: 'MAC', preco: 9789.99})
    produtos.push({id: 5, nome: 'PEN', preco: 109.99})
    
    return produtos;
})

export default Array()