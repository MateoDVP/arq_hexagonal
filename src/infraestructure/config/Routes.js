import express from "express";
import ProductController from "../products/controllers/ProductController.js";
// import UserController from "../users/controllers/UserController.js";

const router = express.Router();

// Rutas de productos
router.post("/products/create", ProductController.create);
router.get("/products", ProductController.getAll);
router.put("/products/:id", ProductController.update);
router.delete("/products/:id", ProductController.delete);
// Rutas de usuarios
// router.post("/users/register", UserController.register);

export default router;