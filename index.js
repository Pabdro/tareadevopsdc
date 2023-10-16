const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

// Usa cors como middleware
app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
  host: 'mysql',
  port: '3306',
  user: 'root',
  password: 'qwert',
  database: 'formulario'
});

db.connect((error) => {
  if (error) {
    console.error('Error conectando a la base de datos:', error);
    return;
  }
  console.log('Conectado a la base de datos');
});

app.post('/personas', (req, res) => {
  const { nombre, apellido } = req.body;
  const query = `INSERT INTO personas (nombre, apellido) VALUES ('${nombre}', '${apellido}')`;

  db.query(query, (error) => {
    if (error) {
      console.error('Error insertando en la base de datos:', error);
      res.status(500).send('Error insertando en la base de datos');
      return;
    }

    res.status(200).send('Persona insertada correctamente');
  });
});

app.listen(5000, () => {
  console.log('Servidor escuchando en el puerto 5000');
});
