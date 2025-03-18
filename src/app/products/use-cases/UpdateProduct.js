import Product from '../../../domain/products/entities/Products.js';

class UpdateProductUseCase {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async execute(productData) {
        const { id, name, description, price } = productData;
        const updatedProduct = new Product(id, name, description, price);
        return await this.productRepository.update(updatedProduct);
    }
}

export default UpdateProductUseCase;
