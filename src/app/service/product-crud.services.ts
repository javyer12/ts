import { UpdateProductDto } from '../dto/product.dto';
import { Product } from '../models/product.models';
import { ProductHttpService } from './product-https.services';

export class ProductCRUDService {
  private url = 'https://api.escuelajs.co/api/v1/products';
  private http = new ProductHttpService(this.url);
  async update(id: Product[ 'id' ], dto: UpdateProductDto) {
    this.http.otherRequest()
    return this.http.update(id, dto);
  }
}
