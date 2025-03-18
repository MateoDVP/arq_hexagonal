
class GetAllProducts {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async execute() {
        return this.productRepository.getAll();
    }
}

export default GetAllProducts;
