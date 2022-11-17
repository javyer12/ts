import { Product } from '../models/product.models';
import { Category } from '../models/category.models';

export interface CreateProductDto extends Omit<Product, 'id' | 'category'> {
  categoryId: Category[ 'id' ];
}


export interface UpdateProductDto extends Partial<CreateProductDto> { }


