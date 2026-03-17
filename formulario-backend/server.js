const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "formulario_db"
});

app.get("/teste", (req, res) => {
    res.send("API funcionando!");
});

app.post("/formulario", (req, res) => {
    const {nome, email, senha, dataNascimento, sexo, estado } = req.body;

    const sql = `
        INSERT INTO usuarios (nome, email, senha, dataNascimento, sexo, estado)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [nome, email, senha, dataNascimento, sexo, estado], (err, result) => {

        if (err) {console.error(err);
            res.status(500).json({ erro: "Erro ao salvar dados" });
        } else {
            res.json({ mensagem: "Usuário cadastrado com sucesso"});
        }
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
});