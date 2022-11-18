import { Product } from "../models/product.models";
import { BaseHttpService } from "./base-http.services";

export class ProductHttpService extends BaseHttpService<Product>{
  otherRequest() {
    this.url
  }
}
