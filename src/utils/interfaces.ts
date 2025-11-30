export interface AuthResponse {
  access: string;
  refresh?: string;
}

export interface IUser {
  id?: number;
  username?: string | null;
  email?: string;
  first_name?: string;
  last_name?: string;
  is_active?: boolean;
}

export interface IUserListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IUser[];
}

export interface ICategory {
  id: number;
  name: string;
}

export interface ISizes {
  size: number;
  price?: number;
  preparation: string;
}

export interface IProducts {
  id: number;
  name: string;
  image?: string;
  description: string;
  category: number;
  sizes: ISizes[];
}

export interface IProduct {
  name: string;
  quantity: string;
  price_in: string;
  price_out: string;
  price_discounted: string;
  image: string;
  category: ICategory;
  benefit: number;
}

export interface IProductListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IProduct[];
}

export interface ProductCardProps {
  product: IProducts;
  onClick?: (product: IProducts) => void;
}
