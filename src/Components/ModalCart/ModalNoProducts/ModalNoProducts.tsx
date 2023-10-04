import React from 'react';
import styles from './ModalNoProducts.module.scss';
import { useCart } from '../../../Contexts/CartContext';

const ModalNoProducts = () => {
  const { cartItems, toggleCart } = useCart();
  return (
    <div className={styles.emptyModal}>
      <div className={styles.cartContains}>
        <div onClick={() => toggleCart()} className={styles.closeIcon}>
          <div className={styles.ball}></div>
          <div className={styles.xIcon}>×</div>
        </div>
        <h3>Seu carrinho ({cartItems.length} itens)</h3>
      </div>
      <h4>
        SEU CARRINHO
        <br />
        ESTÁ VAZIO
      </h4>
      <p>
        Navegue pelas categorias da loja para <br /> encontrar seu produto.
      </p>
      <button onClick={() => toggleCart()}>Continuar Comprando</button>
    </div>
  );
};

export default ModalNoProducts;
