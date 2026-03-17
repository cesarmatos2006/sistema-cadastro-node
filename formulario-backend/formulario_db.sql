CREATE DATABASE formulario_db;
USE formulario_db;
CREATE TABLE usuarios (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100),
    senha VARCHAR(100),
    dataNascimento DATE,
    sexo VARCHAR(20),
    estado VARCHAR(50)
);