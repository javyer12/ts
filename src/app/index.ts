import { ProductMemoryService } from "./service/product-memory.services";

const productService = new ProductMemoryService();
productService.create({
  title: 'marvel cards ',
  price: 233,
  description: 'are you fan of marvel?, you will love this.',
  categoryId: 12,
  images: []
})

const product = productService.getAll();
let productId = product[ 0 ].id;
console.log(productId);

productService.update(productId, {
  title: 'DC cards ',
  price: 23,
  description: 'are you fan of DC?, you will love this.',
})

const rta = productService.findOne(productId);
console.log(rta)
