import { ProductHttpService } from './service/product-http.services';
(async () => {
  const productService = new ProductHttpService();

  console.log('---'.repeat(10));
  const product = await productService.getAll();
  console.log(product.map(item => item.price));
})();
