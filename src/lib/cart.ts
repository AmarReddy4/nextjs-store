"use client";

import { Product } from "@/data/products";

export interface CartItem {
  product: Product;
  quantity: number;
}

const CART_KEY = "nextjs-store-cart";

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
}

export function addToCart(product: Product): CartItem[] {
  const cart = getCart();
  const existing = cart.find((item) => item.product.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ product, quantity: 1 });
  }

  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event("cart-updated"));
  return cart;
}

export function removeFromCart(productId: string): CartItem[] {
  const cart = getCart().filter((item) => item.product.id !== productId);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event("cart-updated"));
  return cart;
}

export function updateQuantity(productId: string, quantity: number): CartItem[] {
  const cart = getCart();
  const item = cart.find((item) => item.product.id === productId);
  if (item) {
    item.quantity = Math.max(0, quantity);
    if (item.quantity === 0) {
      return removeFromCart(productId);
    }
  }
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event("cart-updated"));
  return cart;
}

export function clearCart(): void {
  localStorage.removeItem(CART_KEY);
  window.dispatchEvent(new Event("cart-updated"));
}

export function getCartTotal(cart: CartItem[]): number {
  return cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
}
