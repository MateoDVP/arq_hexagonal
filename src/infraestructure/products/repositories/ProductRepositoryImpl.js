import ProductModel from "../../config/databases/models/ProductModel.js"

class ProductRepositoryImpl {
    async create(product) {
        return await ProductModel.create(product);
    }

    async getById(id) {
        return await ProductModel.findByPk(id);
    }

    async getAll() {
        return await ProductModel.findAll();
    }

    async update(id, productData) {
        const product = await ProductModel.findByPk(id);
        if (!product) return null;
        return await product.update(productData);
    }

    async delete(id) {
        return await ProductModel.destroy({ where: { id } });
    }
}

export default new ProductRepositoryImpl();