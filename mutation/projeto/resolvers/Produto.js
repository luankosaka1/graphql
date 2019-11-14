module.export = {
    precoComDesconto(produto) {
        if (produto.desconto > 0) {
            return produto.preco - (produto.preco * produto.desconto)
        }

        return produto.preco
    }
}