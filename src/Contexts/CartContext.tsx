import React from 'react';
import { Products } from '../ts/Products';

export interface CartItem extends Products {
  quantity: number;
  totalPrice: number;
}

interface CartContextProps {
  isOpen: boolean;
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  setProductsInLStorage: React.Dispatch<React.SetStateAction<CartItem[] | []>>;
  productsInLStorage: CartItem[] | [];
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
  const [cartItems, setCartItems] = React.useState<CartItem[]>(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [productsInLStorage, setProductsInLStorage] = React.useState<
    CartItem[] | []
  >([]);

  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(productsInLStorage));
  }, [productsInLStorage]);

  React.useEffect(() => {
    setProductsInLStorage(cartItems);
  }, [cartItems]);

  React.useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  function toggleCart() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  function addToCart(product: Products) {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id,
    );

    if (existingItemIndex !== -1) {
      // O item já existe, vamos atualizar a quantidade e o preço total
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex] = {
        ...updatedCartItems[existingItemIndex],
        quantity: updatedCartItems[existingItemIndex].quantity + 1,
        totalPrice:
          updatedCartItems[existingItemIndex].totalPrice + product.price,
      };
      setCartItems(updatedCartItems);
      setProductsInLStorage(updatedCartItems);
    } else {
      // O item não existe, vamos adicionar um novo item
      const newItem: CartItem = {
        ...product,
        quantity: 1,
        totalPrice: product.price,
      };
      setCartItems((prevCartItems) => [...prevCartItems, newItem]);
      setProductsInLStorage((prevItems) => [...prevItems, newItem]);
    }
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

  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        productsInLStorage,
        setProductsInLStorage,
        setCartItems,
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
