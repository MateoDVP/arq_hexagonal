
class DeleteProductUseCase {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute(productData) {
    const { id } = productData;
    return await this.productRepository.delete(id);
  }
}

export default DeleteProductUseCase;