const usuario = {
    nome: "Tiago Galhoto",
    email: "tiagogalhoto2@gmail.com",
    telefone: "41999860633"
}

console.log(usuario);

const banco_de_dados = conecte();
banco_de_dados.add(usuario);