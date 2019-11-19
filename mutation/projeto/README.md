# Consulta

mutation {
  novoUsuario(
    dados: {
      nome: "pupita",
      email: "pupita2@email.com"
      idade: 20
    }
  ) {
    id nome email perfil {nome}
  }
  
	excluirUsuario(id:1) {
	id nome
	}  
  
  alterarUsuario(
    id: 1
    nome: "ABCD"
    email: "novo@email.com"
  ) {
    id nome email
  }
}

query {
  usuarios {
    id nome email
  }
}