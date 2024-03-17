const jwt = require("jsonwebtoken");
require("dotenv").config();

const gerarToken = (idUsuario) => {
  const secreto = process.env.JWT_SECRET;

  if (!secreto) {
    throw new Error('A chave secreta não está definida.');
  }

  const payload = {
    idUsuario: idUsuario,
  };

  const token = jwt.sign(payload, secreto, { expiresIn: "1h" });

  return token;
};
module.exports = { gerarToken };
