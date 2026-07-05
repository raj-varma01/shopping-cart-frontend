import { createAsyncThunk } from "@reduxjs/toolkit";
import * as cartApi from "../../api/cartApi";

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, { rejectWithValue }) => {
    try {
      return await cartApi.getCart();
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch cart"
      );
    }
  }
);

export const addItemToCart = createAsyncThunk(
  "cart/addItem",
  async (
    {
      productId,
      quantity = 1,
    }: {
      productId: string;
      quantity?: number;
    },
    { rejectWithValue }
  ) => {
    try {
      return await cartApi.addToCart(productId, quantity);
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to add item"
      );
    }
  }
);

export const updateCartQuantity = createAsyncThunk(
  "cart/updateQuantity",
  async (
    {
      productId,
      action,
    }: {
      productId: string;
      action: "increment" | "decrement";
    },
    { rejectWithValue }
  ) => {
    try {
      return await cartApi.updateCart(productId, action);
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update quantity"
      );
    }
  }
);

export const removeItemFromCart = createAsyncThunk(
  "cart/removeItem",
  async (productId: string, { rejectWithValue }) => {
    try {
      return await cartApi.removeCartItem(productId);
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to remove item"
      );
    }
  }
);

export const clearCartItems = createAsyncThunk(
  "cart/clearCart",
  async (_, { rejectWithValue }) => {
    try {
      return await cartApi.clearCart();
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to clear cart"
      );
    }
  }
);