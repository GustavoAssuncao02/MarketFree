const { Router } = require("express");
const router = Router(); 
const connection = require("../database/databaseConnection");
const jtw = require("jsonwebtoken");
require("dotenv-safe").config();
const {gerarToken} = require('./jwt.js');

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
//------------------------------------------------------------------------------------------------------------------------------------------//
router.post("/cadas/leituracliente", (req, res) => {
  const email = req.body.email;
  const sql = "SELECT * FROM usuario WHERE email = ?";
  
  connection.query(sql, [email], (error, result) => {
    if (error) {
      res.status(500).send({ status: false, message: "Erro ao obter dados do usuário" });
    } else {
      if (result.length === 0) {
        res.status(404).send({ status: false, message: "Usuário não encontrado" });
      } else {
        res.status(200).send({
          status: true,
          data: result[0],
          message: "Dados do usuário obtidos com sucesso",
        });
      }
    }
  });
});

//-----------------------------------------------------------------------------------------------------------------------------------//

router.post("/cadas/leituraclienteEndereco", (req, res) => {
  const id = req.body.id; // este é o id do endereço
  const sql = "SELECT * FROM endereco WHERE id = ?";
  
  connection.query(sql, [id], (error, result) => {
    if (error) {
      res.status(500).send({ status: false, message: "Erro ao obter dados do endereço" });
    } else {
      if (result.length === 0) {
        res.status(404).send({ status: false, message: "Endereço não encontrado" });
      } else {
        res.status(200).send({
          status: true,
          data: result[0], // Aqui, result[0] contém os dados do endereço
          message: "Dados do endereço obtidos com sucesso",
        });
      }
    }
  });
});
//-----------------------------------------------------------------------------------------------------------//
router.post("/cadas/alterarUsuario", (req, res) => {
  const cliente = req.body; // Agora req.body contém todo o objeto cliente
  const sqlUsuario = `UPDATE usuario 
                      SET nome = ?, cpf = ?, ocupacao = ?, politicamenteExposta = ? 
                      WHERE id = ?`;
                      
  connection.query(sqlUsuario, [cliente.nome, cliente.cpf, cliente.ocupacao, cliente.politicamenteExposta, cliente.id], (errorUsuario, resultUsuario) => {    
    if (errorUsuario) {
      res.status(500).send({ status: false, message: "Erro ao atualizar dados do usuário" });
    } else {
      if (resultUsuario.affectedRows === 0) {
        res.status(404).send({ status: false, message: "Usuário não encontrado" });
      } else {
        res.status(200).send({ status: true, message: "Dados atualizados com sucesso" });
      }
    }
  });
});


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------//

router.post("/cadas/alterarUsuarioDados", (req, res) => {
  const cliente = req.body;
  const sqlUsuario = `UPDATE usuario 
                    SET email = ?, numeroTelefone = ?, nomeDeUsuario = ? 
                    WHERE id = ?`;

                      
  connection.query(sqlUsuario, [cliente.email, cliente.numeroTelefone, cliente.nomeDeUsuario,  cliente.id], (errorUsuario, resultUsuario) => {    
    if (errorUsuario) {
      res.status(500).send({ status: false, message: "Erro ao atualizar dados do usuário" });
    } else {
      if (resultUsuario.affectedRows === 0) {
        res.status(404).send({ status: false, message: "Usuário não encontrado" });
      } else {
        res.status(200).send({ status: true, message: "Dados atualizados com sucesso" });
      }
    }
  });
});


//----------------------------------------------------------------------------------------------------------------------------------//

router.post("/cadas/alterarUsuarioSeguranca", (req, res) => {
  const cliente = req.body;
  const sqlUsuario = `UPDATE usuario 
                      SET email = ?, numeroTelefone = ?, nomeDeUsuario = ?, senha = ?
                      WHERE id = ?`;

  connection.query(sqlUsuario, [cliente.email, cliente.numeroTelefone, cliente.nomeDeUsuario, cliente.senha, cliente.id], (errorUsuario, resultUsuario) => {    
    if (errorUsuario) {
      console.error(errorUsuario);
      res.status(500).send({ status: false, message: "Erro ao atualizar dados do usuário" });
    } else {
      if (resultUsuario.affectedRows === 0) {
        res.status(404).send({ status: false, message: "Usuário não encontrado" });
      } else {
        res.status(200).send({ status: true, message: "Dados atualizados com sucesso" });
      }
    }
  });
});

//---------------------------------------------------------------------------------------------------------------------------------//
router.post("/cadas/alterarEndereco", (req, res) => {
  const endereco = req.body; // Agora estamos recebendo o objeto completo do endereço

  const sqlEndereco = `UPDATE endereco 
  SET endereco = ?, cep = ?, cidade = ?, numero = ?, estado = ? 
  WHERE id = ?`;
  
  connection.query(sqlEndereco, [endereco.endereco, endereco.cep, endereco.cidade, endereco.numero, endereco.estado, endereco.id], (errorEndereco, resultEndereco) => {
    if (errorEndereco) {
      res.status(500).send({ status: false, message: "Erro ao atualizar dados do endereço" });
    } else {
      if (resultEndereco.affectedRows === 0) {
        res.status(404).send({ status: false, message: "Endereço não encontrado" });
      } else {
        res.status(200).send({ status: true, message: "Endereço atualizado com sucesso" });
      }
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
      clienteDetalhes.idEndereco = response.insertId;
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

//------------------------------------------------------------------------------------------------------------------------------------------//

router.post("/login", (req, res) => {
  const { emailOuCPF, senha } = req.body;
  
  // Verificar se o emailOuCPF é um email ou CPF
  let sqlEmail = "SELECT * FROM usuario WHERE email = ? AND senha = ?";
  let sqlCPF = "SELECT * FROM usuario WHERE cpf = ? AND senha = ?";
  
  connection.query(sqlEmail, [emailOuCPF, senha], (errorEmail, resultsEmail) => {
    if (errorEmail) {
      console.error("Erro ao executar a consulta:", errorEmail);
      return res.status(500).json({ success: false, message: "Erro ao fazer login" });
    }
    if (resultsEmail.length > 0) {
      const token = gerarToken(resultsEmail[0].idUsuario);
      console.log(token);
      return res.status(200).json({ success: true, message: "Login bem-sucedido", token: token });
    } else {
      // Tentar fazer login com o CPF
      connection.query(sqlCPF, [emailOuCPF, senha], (errorCPF, resultsCPF) => {
        if (errorCPF) {
          console.error("Erro ao executar a consulta:", errorCPF);
          return res.status(500).json({ success: false, message: "Erro ao fazer login" });
        }
        if (resultsCPF.length > 0) {
          const token = gerarToken(resultsCPF[0].idUsuario);
          console.log(token);
          return res.status(200).json({ success: true, message: "Login bem-sucedido", token: token });
        } else {
          return res.status(401).json({ success: false, message: "Credenciais inválidas. Verifique seu e-mail ou CPF e senha e tente novamente." });
        }
      });
    }
  });
});


//------------------------------------------------------------------------------------------------------------------------------------------//
router.post("/cadas/apagarConta", (req, res) => {
  const { idUsuario } = req.body;

  // Consulta SQL para obter o ID do endereço associado ao usuário
  let sqlSelectEnderecoId = "SELECT idEndereco FROM usuario WHERE id = ?";
  connection.query(sqlSelectEnderecoId, [idUsuario], (errorSelect, resultsSelect) => {
    if (errorSelect) {
      console.error("Erro ao obter o ID do endereço:", errorSelect);
      return res.status(500).json({ success: false, message: "Erro ao apagar conta" });
    }
    if (resultsSelect.length === 0) {
      return res.status(404).json({ success: false, message: "Usuário não encontrado" });
    }
    const idEndereco = resultsSelect[0].idEndereco;

    // Consulta SQL para atualizar os registros na tabela usuario que estão vinculados a esse endereço
    let sqlUpdateUsuario = "UPDATE usuario SET idEndereco = NULL WHERE idEndereco = ?";
    connection.query(sqlUpdateUsuario, [idEndereco], (errorUpdate, resultsUpdate) => {
      if (errorUpdate) {
        console.error("Erro ao atualizar registros na tabela usuario:", errorUpdate);
        return res.status(500).json({ success: false, message: "Erro ao apagar conta" });
      }

      // Consulta SQL para excluir o endereço associado ao usuário
      let sqlDeleteEndereco = "DELETE FROM endereco WHERE id = ?";
      connection.query(sqlDeleteEndereco, [idEndereco], (errorDelete, resultsDelete) => {
        if (errorDelete) {
          console.error("Erro ao excluir o endereço:", errorDelete);
          return res.status(500).json({ success: false, message: "Erro ao apagar conta" });
        }
        
        // Consulta SQL para excluir o usuário
        let sqlDeleteUsuario = "DELETE FROM usuario WHERE id = ?";
        connection.query(sqlDeleteUsuario, [idUsuario], (errorDeleteUsuario, resultsDeleteUsuario) => {
          if (errorDeleteUsuario) {
            console.error("Erro ao excluir o usuário:", errorDeleteUsuario);
            return res.status(500).json({ success: false, message: "Erro ao apagar conta" });
          }
          if (resultsDeleteUsuario.affectedRows === 0) {
            return res.status(404).json({ success: false, message: "Usuário não encontrado" });
          }
          
          // Se chegarmos até aqui, o usuário e o endereço foram excluídos com sucesso
          return res.status(200).json({ success: true, message: "Conta excluída com sucesso" });
        });
      });
    });
  });
});




module.exports = router;
