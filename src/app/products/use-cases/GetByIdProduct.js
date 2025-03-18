
class GetProductById {
    constructor(productRepository) {
      this.productRepository = productRepository;
    }
  
    async execute(id) {
      return this.productRepository.getById(id);
    }
  }
  
  export default GetProductById;
