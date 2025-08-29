import { Product } from "./Product";
import { Post } from "./Posts";

export interface Order {
  id?: string;
  date: Date;
  status: OrdersStatus;
  clicks: number;
  totalPrice: string;
  UserId?: string;
}

export interface OrderItem {
  id?: string;
  amount: number;
  unitPrice: number;
  totalPrice: number;
  orderId: string;
  productId: string;
  product?: Product;
  post?: Post;
}

export enum OrdersStatus {
  PENDING = "pending",
  COMPLETED = "completed",
  CANCELED = "canceled",
}
