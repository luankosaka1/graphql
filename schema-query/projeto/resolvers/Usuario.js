const {perfis} = require('../data/db')

module.exports = {
    salario(usuario) {
        return usuario.salario_real
    },
    perfil(usuario) {
        const select = perfis.filter(p => p.id === usuario.perfil_id)
        return select ? select[0] : null
    }
}