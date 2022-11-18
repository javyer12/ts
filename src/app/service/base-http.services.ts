import { Category } from "../models/category.models";
import { Product } from "../models/product.models";
import axios from 'axios';
import { UpdateProductDto } from "../dto/product.dto";

export class BaseHttpService<TypeClass>{
  //tipado dinamico en clases
  // data: TypeClass[] = [];
  constructor(
    protected url: string
  ) { }
  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }
  async update<typeM>(id: typeM, changes: unknown) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
}
(async () => {

  const url = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService<Product[]>(url);
  const rta = await productService.getAll()
  productService.update<Product[ 'id' ] | UpdateProductDto>(1, {
    title: "typescript",
    price: 22
  })
  console.log('products:', rta.length);

  const urlC = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Category[]>(urlC)
  const rta1 = await categoryService.getAll();
  console.log('categories:', rta1.length)
})();
