//mayuscula: decorador
//minuscula: funcion

import { IsEnum, IsNotEmpty, IsUrl, Length, validateOrReject } from 'class-validator';

import { AccessType, Category } from '../models/category.models';

export interface ICreateCategoryDTO extends Omit<Category, 'id'> { }
export class CreateCategoryDto implements ICreateCategoryDTO {
  @IsNotEmpty()
  @Length(4, 20)
  name!: string;
  @IsUrl()
  @IsNotEmpty()
  image!: string;
  @IsNotEmpty()
  // @IsEnum(AccessType)
  access?: AccessType | undefined;
}

(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = "juanquiles";
    dto.image = 'https://github.com/kubernetes/kubernetes';
    dto.access = undefined;
    await validateOrReject(dto);
  } catch (err) {
    console.log(err);
  }

})()
