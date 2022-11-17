import axios from 'axios';

import { Product } from './models/product.models';

let anyVar: any = 12;
let boolVar: boolean = anyVar;

(async () => {

  async function getProducts() {
    const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
    //alternativa para cuando la libreria no soporta tipado hacia AddEventListenerOptions
    // const ddata = data as Product[];x
    return data;
  }

  const products = await getProducts();
  console.log(products.map(item => `${item.id} - ${item.title}}`));
})();
