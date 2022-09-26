export interface IVariant {
  color: string;
  size: string;
  inventory: number;
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  sku: string;
  status: string;
  thumbnail: string;
  type: string;
  vendor: string;
  images: string[];
  variants: IVariant[];
  price: number;
  quantity: number;
}
