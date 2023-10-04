import styles from './ModalCart.module.scss';
import { useCart } from '../../Contexts/CartContext';
import ModalWithProducts from './ModalWithProducts/ModalWithProducts';
import ModalNoProducts from './ModalNoProducts/ModalNoProducts';

const ModalCart = () => {
  const { cartItems, toggleCart, isOpen } = useCart();

  return (
    <>
      {isOpen && (
        <>
          <div className={styles.modalCart}>
            <div className={styles.cartContains}>
              <div onClick={() => toggleCart()} className={styles.closeIcon}>
                <div className={styles.ball}></div>
                <div className={styles.xIcon}>×</div>
              </div>

              <h3>
                Seu carrinho (
                {cartItems.reduce(
                  (accumulator, current) => (accumulator += current.quantity),
                  0,
                )}{' '}
                itens)
              </h3>
            </div>
            {cartItems && cartItems.length === 0 && <ModalNoProducts />}
            {cartItems &&
              cartItems.length > 0 &&
              cartItems.map((item, index) => (
                <ModalWithProducts item={item} index={index} />
              ))}
          </div>
          <div
            onClick={() => toggleCart()}
            className={styles.backgroundFound}
          ></div>
        </>
      )}
    </>
  );
};

export default ModalCart;
