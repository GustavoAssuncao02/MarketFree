const { Router } = require("express");
const router = Router();
const connection = require("../database/databaseConnection");


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
router.post("/cadas/add", (req, res) => {
  let detalhes = {
    nome: req.body.nome,
    nomeDeUsuario: req.body.nomeDeUsuario,
    cpf: req.body.cpf,
    dataNascimento: req.body.dataNascimento,
    numeroTelefone: req.body.numeroTelefone,
    genero: req.body.genero,
    email: req.body.email,
    senha: req.body.senha,
    ocupacao: req.body.ocupacao,
    politicamenteExposta: req.body.politicamenteExposta,
    idEndereco: req.body.idEndereco,
  };
  console.log(detalhes);


  let sqlcliente = "INSERT INTO marketfree.usuario SET ?";

  connection.query(sqlcliente, detalhes, (error, response) => {
    if (error) {
      console.error("Erro ao criar:", error);
      res.status(500).send({ status: false, message: "Erro ao criar" });
    } else {
      console.log("Deu certo");
      res.setHeader("Content-Type", "application/json");
      res
        .status(200)
        .send({ status: true, message: "Registro criado com sucesso" });
    }
  });
});



//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

router.get("/cadas/leitura", (req, res) => {
  const sql = "SELECT * FROM `usuario`";
  connection.query(sql, (error, result) => {
    if (error) {
      res
        .status(500)
        .send({ status: false, message: "Erro ao obter dados do formulário" });
    } else {
      res
        .status(200)
        .send({
          status: true,
          data: result,
          message: "Dados do formulário obtidos com sucesso",
        });
    }
  });
});




//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
router.post("/cadas/endereco", (req, res) => {
  let endereco = {
    cep: req.body.cep,
    endereco: req.body.endereco,
    cidade: req.body.cidade,
    numero: req.body.numero,
    complemento: req.body.complemento,
    estado: req.body.estado,
  }
  let sqlEndereco = "INSERT INTO marketfree.endereco   SET ?";
  connection.query(sqlEndereco, endereco, (error, response) => {
    if (error) {
      console.error("Erro ao criar:", error);
      res.status(500).send({ status: false, message: "Erro ao criar" });
    } else {
      console.log("Deu certo");
      res.setHeader("Content-Type", "application/json");
      res
        .status(200)
        .send({ status: true, message: "Registro criado com sucesso" });
    }
  });
});




//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
router.post("/cadas/dado", (req, res) => {
  console.log("chegou ao teste")

  let enderecoDetalhes = {
    cep: req.body.endereco.cep,
    cidade: req.body.endereco.cidade,
    endereco: req.body.endereco.endereco,
    numero: req.body.endereco.numero,
    complemento: req.body.endereco.complemento,
    estado: req.body.endereco.estado,
  };

  let clienteDetalhes = {
    nome: req.body.cliente.nome,
    nomeDeUsuario: req.body.cliente.nomeDeUsuario,
    cpf: req.body.cliente.cpf,
    dataNascimento: req.body.cliente.dataNascimento,
    numeroTelefone: req.body.cliente.numeroTelefone,
    genero: req.body.cliente.genero,
    email: req.body.cliente.email,
    senha: req.body.cliente.senha,
    ocupacao: req.body.cliente.ocupacao,
    politicamenteExposta: req.body.cliente.politicamenteExposta,
    idEndereco: req.body.endereco.idEndereco,
  };
  console.log(enderecoDetalhes);
  console.log(clienteDetalhes);

  let sqlCliente = "INSERT INTO marketfree.usuario SET ?";
  let sqlEndereco = "INSERT INTO marketfree.endereco SET ?";  



  connection.query(sqlEndereco, enderecoDetalhes, (error, response) => {
    if (error) {
      console.error("Erro ao criar endereço:", error);
      res.status(500).send({ status: false, message: "Erro ao criar endereço" });
    } else {
      console.log("Endereço criado com sucesso");
  
      // Atualização do idEndereco do cliente após a inserção bem-sucedida do endereço
      clienteDetalhes.idEndereco = response.insertId;
  
      // Inserir dados do cliente apenas se a inserção do endereço for bem-sucedida
      connection.query(sqlCliente, clienteDetalhes, (error, response) => {
        if (error) {
          console.error("Erro ao criar cliente:", error);
          res.status(500).send({ status: false, message: "Erro ao criar cliente" });
        } else {
          console.log("Cliente criado com sucesso");
          res.setHeader("Content-Type", "application/json");
          res.status(200).send({ status: true, message: "Registro criado com sucesso" });
        }
      });
    }
  });
  
  
});




module.exports = router;
