const { usuarios, perfis } = require('../data/db')

module.exports = {
    perfis() {
        return perfis
    },
    perfil(_, {id}) {
        const select = perfis.filter(p => p.id === parseInt(id))
        return select ? select[0] : null
    },
    usuario(_, args) {
        const selecionados = usuarios
            .filter(u => u.id === parseInt(args.id))
        return selecionados ? selecionados[0] : null
    },
    usuarios() {
        return usuarios
    },
    numerosMegaSena() {
        const crescente = (a,b) => a - b
        return Array(6).fill(0)
            .map(n => parseInt(Math.random() * 60 + 1))
            .sort(crescente)
    },
    ola() {
        return 'Bom dia!'
    },
    horaAtual() {
        return new Date
    },
    usuarioLogado() {
        return {
            id: 1,
            nome: 'Luan Kosaka',
            email: 'luan.kosaka@gmail.com',
            idade: 30,
            salario_real: 1000.99,
            vip: true
        }
    },
    produtoEmDestaque() {
        return {
            nome: 'Cerveja',
            preco: 99.9,
            desconto: 0.1
        }
    }
}