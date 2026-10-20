export type UserRole = "admin" | "user";

export interface User {
  id?: number;
  email?: string;
  name?: string;
  password?: string;
  role?: UserRole;
  gender?: string;
  phone?: string;
  address?: string;
  createdAt?: number;
  updatedAt?: number;
}

export interface AuthStorage {
  accessToken?: string;
  role?: UserRole;
}

export interface Category {
  id: number;
  name?: string;
}

export interface ProductOption {
  id: number;
  productId: number;
  name?: string;
  price?: number;
  stock?: number;
}

export interface Favorite {
  id: number;
  userId: number;
  productId: number;
  product?: Product;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  isNew?: boolean;
  image?: string;
  categoryId?: number;
  category?: Category;
  screen?: string;
  camera?: string;
  ram?: string;
  rom?: string;
  cpu?: string;
  gpu?: string;
  pin?: string;
  sim?: string;
  hdh?: string;
  stock?: number;
  updatedAt?: number;
  salePercent?: number;
  soldCount?: number;
  content?: string;
  productOptions?: ProductOption[];
  favorites?: Favorite[];
}

export interface CartItem {
  id: number;
  userId: number;
  productId: number;
  productOptionId?: number | false;
  quantity: number;
  product?: Product;
  productOption?: ProductOption;
}

export interface OrderProduct {
  id?: number;
  name?: string;
  quantity?: number;
  option?: string;
}

export interface Order {
  id: number;
  userId: number;
  status: string;
  paymentType?: string;
  paymentStatus?: string;
  totalPrice?: number;
  createdAt?: number;
  products?: OrderProduct[];
  fullName?: string;
  phoneNumber?: string;
  address?: string;
  city?: string;
  district?: string;
  ward?: string;
}

export interface Discount {
  id: number;
  code: string;
  name?: string;
  type?: string;
  discountType?: string;
  discountValue?: number;
  value?: number;
  endDate?: string;
}

export interface Comment {
  id: number;
  productId: number;
  userId: number;
  content?: string;
  rate?: number;
  createdAt?: number | string;
  user?: User;
}

export interface LocationItem {
  id?: number | string;
  code?: string;
  parentcode?: string;
  name: string;
}

export interface PaginationMeta {
  page?: number;
  limit?: number;
  total?: number;
  [key: string]: unknown;
}

export interface AsyncListState<T> {
  data: T[];
  loading: boolean;
  error: string | null;
  meta?: PaginationMeta | Record<string, unknown>;
}

export interface AsyncItemState<T> {
  data: T;
  loading: boolean;
  error?: string | null;
}

export interface JwtPayload {
  sub: string | number;
  [key: string]: unknown;
}
