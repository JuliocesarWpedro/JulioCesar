import React from 'react';
import { Products } from '../ts/Products';

export interface CartItem extends Products {
  quantity: number;
  totalPrice: number;
}

interface CartContextProps {
  isOpen: boolean;
  cartItems: CartItem[];
  toggleCart: () => void;
  addToCart: (product: Products) => void;
  removeFromCart: (productId: string) => void;
  increaseQuantity: (product: CartItem) => void;
  decreaseQuantity: (product: CartItem) => void;
}

export const CartContext = React.createContext<CartContextProps | undefined>(
  undefined,
);

export function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);

  React.useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  function toggleCart() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  function addToCart(product: Products) {
    const existingItem = cartItems.find((item) => item.id === product.id);

    setCartItems((prevCartItems) =>
      existingItem
        ? prevCartItems.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  totalPrice: item.totalPrice + product.price,
                  quantity: item.quantity + 1,
                }
              : item,
          )
        : [
            ...prevCartItems,
            { ...product, totalPrice: product.price, quantity: 1 },
          ],
    );
  }

  function removeFromCart(productId: string) {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId),
    );
  }

  function increaseQuantity(product: CartItem) {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === product.id
          ? {
              ...item,
              totalPrice: item.totalPrice + product.price,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  }

  function decreaseQuantity(product: CartItem) {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === product.id && item.quantity > 1
          ? {
              ...item,
              totalPrice: item.totalPrice - product.price,
              quantity: item.quantity - 1,
            }
          : item,
      ),
    );
  }

  return (
    <CartContext.Provider
      value={{
        isOpen,
        cartItems,
        toggleCart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartContextProvider');
  }
  return context;
}
