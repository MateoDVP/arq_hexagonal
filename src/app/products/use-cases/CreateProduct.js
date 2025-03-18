import Product from '../../../domain/products/entities/Products.js';

class CreateProduct {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute(productData) {
    const { id, name, description, price } = productData;
    const newProduct = new Product(id, name, description, price); // La ID se generará en la infraestructura
    return this.productRepository.create(newProduct);
  }
}

export default CreateProduct;
