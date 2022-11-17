type Size = 'small' | 'medium' | 'big'
type Fruits = 'Apple' | 'Banana' | 'Orange' | 'Melon';

type Fruit = {
  color: string;
  quantity: number;
  size: Size;
}

const sesto: Record<Fruits, string> = {
  Apple: 'Fresh',
  Banana: 'Fresh',
  Orange: 'Fresh',
  Melon: 'Fresh',
}
