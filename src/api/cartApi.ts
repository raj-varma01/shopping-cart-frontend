import api from "./axios";
import type { Cart } from "../types/cart";

interface CartResponse {
  success: boolean;
  message: string;
  data: Cart;
}

export const getCart = async (): Promise<Cart> => {
  const response = await api.get<CartResponse>("/cart");
  return response.data.data;
};

export const addToCart = async (
  productId: string,
  quantity = 1
): Promise<Cart> => {
  const response = await api.post<CartResponse>("/cart", {
    productId,
    quantity,
  });

  return response.data.data;
};

export const updateCart = async (
  productId: string,
  action: "increment" | "decrement"
): Promise<Cart> => {
  const response = await api.patch<CartResponse>(
    `/cart/${productId}`,
    {
      action,
    }
  );

  return response.data.data;
};

export const removeCartItem = async (
  productId: string
): Promise<Cart> => {
  const response = await api.delete<CartResponse>(
    `/cart/${productId}`
  );

  return response.data.data;
};

export const clearCart = async (): Promise<Cart> => {
  const response = await api.delete<CartResponse>("/cart");

  return response.data.data;
};