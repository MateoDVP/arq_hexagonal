import ProductRepository from "../repositories/ProductRepositoryImpl.js";
import CreateProduct from "../../../app/products/use-cases/CreateProduct.js";
import GetAllProducts from "../../../app/products/use-cases/GetAllProducts.js";
import UpdateProduct from "../../../app/products/use-cases/UpdateProduct.js";
import DeleteProduct from "../../../app/products/use-cases/DeleteProduct.js";

class ProductController {
  async create(req, res) {
    try {
      const { name, description, price } = req.body;

      if (!name || !description || price === undefined) {
        return res.status(400).json({
          error: true,
          message: "Se necesitan todos los campos requeridos: name, description y price.",
        });
      }

      const productData = req.body
      const useCase = new CreateProduct(ProductRepository);
      const product = await useCase.execute(productData);

      return res.status(201).json({ error: false, product });
    } catch (error) {
      return res.status(500).json({ error: true, message: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const useCase = new GetAllProducts(ProductRepository);
      const products = await useCase.execute();
      return res.json({ error: false, products });
    } catch (error) {
      return res.status(500).json({ error: true, message: error.message });
    }
  }

  
  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, description, price } = req.body;

      if (!name || !description || price === undefined) {
        return res.status(400).json({
          error: true,
          message: "Se necesitan todos los campos requeridos: name, description y price.",
        });
      }

      const useCase = new UpdateProduct(ProductRepository);
      const updatedProduct = await useCase.execute(id, { name, description, price });

      if (!updatedProduct) {
        return res.status(404).json({ error: true, message: "Producto no encontrado" });
      }

      return res.json({ error: false, product: updatedProduct });
    } catch (error) {
      return res.status(500).json({ error: true, message: error.message });
    }
  }


  async delete(req, res) {
    try {
      const { id } = req.params;

      const useCase = new DeleteProduct(ProductRepository);
      const deleted = await useCase.execute(id);

      if (!deleted) {
        return res.status(404).json({ error: true, message: "Producto no encontrado" });
      }

      return res.json({ error: false, message: "Producto eliminado exitosamente" });
    } catch (error) {
      return res.status(500).json({ error: true, message: error.message });
    }
  }
}

export default new ProductController();