-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 19/03/2024 às 19:34
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `marketfree`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nome` varchar(200) NOT NULL,
  `nomeDeUsuario` varchar(200) NOT NULL,
  `cpf` varchar(11) NOT NULL,
  `dataNascimento` date NOT NULL,
  `numeroTelefone` varchar(100) NOT NULL,
  `genero` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(100) NOT NULL,
  `ocupacao` varchar(100) NOT NULL,
  `politicamenteExposta` varchar(100) NOT NULL,
  `idEndereco` int(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuario`
--

INSERT INTO `usuario` (`id`, `nome`, `nomeDeUsuario`, `cpf`, `dataNascimento`, `numeroTelefone`, `genero`, `email`, `senha`, `ocupacao`, `politicamenteExposta`, `idEndereco`) VALUES
(41, 'João Pedro Silva', 'Joaozinho1', '41351301513', '2000-12-11', '71994731023', 'masculino', 'Joãozinho@email.com', '1234', 'Farmacêutico ', 'Não', 26),
(42, 'Juliana da Silva', 'JuliAnaSilva', '12013910291', '1990-03-22', '71882451090', 'feminino', 'Juli@hotmail.com', '12345', 'Autônoma ', 'Sim', 27),
(43, 'Eduardo Lima', 'EduLima', '10238410291', '2002-08-15', '71901909087', 'masculino', 'Edu@email.com', '12345', 'Engenheiro', 'Não', 28),
(44, 'Flávio Rian', 'Faox', '29019027481', '2002-09-28', '71990129047', 'masculino', 'Fláviorian@hotmail.com', '12345', 'Engenheiro', 'Não', 29),
(45, 'Maria Luiza', 'Lira.luiza', '01238917187', '2000-11-17', '71998672689', 'feminino', 'Lira.luiza@gmail.com', '12345', 'Auxiliar Admistrativo', 'Não', 30),
(46, 'Matheus Teodoro', 'Mattew123', '89087619091', '2002-07-11', '71998786767', 'masculino', 'Matheus@gmail.com', '12345', 'Advogado', 'Não', 31),
(47, 'Telma Neves', 'TelmaNeves', '51341301591', '2002-03-19', '71999717341', 'feminino', 'Telma@hotmail.com', '12345', 'Professora', 'Não', 32);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Id_Endereco` (`idEndereco`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`idEndereco`) REFERENCES `endereco` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
