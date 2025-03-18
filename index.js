import express from "express";
import dotenv from "dotenv";
import sequelize from "./src/infraestructure/config/databases/Database.js";
import routes from "./src/infraestructure/config/routes.js";

dotenv.config(); // Cargar variables de entorno

const app = express();
app.use(express.json());

// Rutas de la API
app.use("/api/v1", routes);

app.get("/", (req, res) => {
  res.json({ message: "arq hexagonal is running" });
});

const PORT = process.env.PORT || 3000;

// Conectar la base de datos y levantar el servidor
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("✅ Base de datos conectada");
    app.listen(PORT, () =>
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`)
    );
  })
  .catch((error) => {
    console.error("❌ Error al conectar la base de datos:", error);
  });
