const express = require("express");
const db = require("./database");
const puerto = 3000;
const app = express();
app.use(express.json());

app.get("/punto1", async (req, res) => {
  const data = await db.primero();
  res.send(data);
  console.log(data.length);
});

app.get("/punto2", async (req, res) => {
  const data = await db.segundo();
  res.send(data);
  console.log(data.length);
});

app.get("/punto3", async (req, res) => {
  const data = await db.tercero();
  res.send(data);
  console.log(data.length);
});
app.get("/punto4", async (req, res) => {
  const data = await db.cuarto();
  res.send(data);
  console.log(data.length);
});
app.get("/punto5", async (req, res) => {
  const data = await db.quinto();
  res.send(data);
  console.log(data.length);
});
app.get("/punto6", async (req, res) => {
  const data = await db.sexto();
  res.send(data);
  console.log(data.length);
});

app.get("/punto7", async (req, res) => {
  const precio = req.query.precio;
  const data = await db.filtrarPrecio(precio);
  res.send(data);
  console.log(data.length);
});

app.post("/punto8", async (req, res) => {
  const precio = String(req.body.precio);
  const data = await db.filtrarPrecio(precio);
  res.send(data);
  console.log(data.length);
});

app.listen(puerto, () => {
  console.log(`Escuchando en el puerto ${puerto}...`);
});
