import axios from 'axios';
import { UpdateProductDto, CreateProductDto } from "../dto/product.dto";
import { ProductService } from "../models/product-service.models";
import { Product } from "../models/product.models";

export class ProductHttpService implements ProductService {
  private url = 'https://api.escuelajs.co/api/v1/products';

  async getAll(): Promise<Product[]> {
    try {
      const { data } = await axios.get<Product[]>(this.url);
      return data;
    } catch (err) {
      throw new Error(`Method not implemented. Error at  ${err}`);
    }
  }
  async update(id: Product[ 'id' ], changes: UpdateProductDto): Promise<Product[]> {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }

  async create(dto: CreateProductDto) {
    try {
      const { data } = await axios.post(this.url, dto);
      return data;
    }
    catch (err) {
      throw new Error(`Method not implemented. Error at  ${err}`);
    }
  }

  async findOne(id: Product[ 'id' ]) {
    try {
      const { data } = await axios.post(`${this.url}/${id}`);
      return data;
    }
    catch (err) {
      throw new Error(`Method not implemented. Error at  ${err}`);
    }
  }
}
