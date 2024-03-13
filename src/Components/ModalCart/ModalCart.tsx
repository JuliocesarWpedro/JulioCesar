import styles from './ModalCart.module.scss';
import { useCart } from '../../Contexts/CartContext';
import ModalWithProducts from './ModalWithProducts/ModalWithProducts';
import ModalNoProducts from './ModalNoProducts/ModalNoProducts';

const ModalCart = () => {
  const { productsInLStorage, setProductsInLStorage, toggleCart, isOpen } =
    useCart();

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
                Seu carrinho ({' '}
                {productsInLStorage &&
                  productsInLStorage.reduce(
                    (accumulator, current) => (accumulator += current.quantity),
                    0,
                  )}{' '}
                {productsInLStorage.length === 1 ? 'item' : 'itens'})
              </h3>
            </div>
            {productsInLStorage && productsInLStorage.length === 0 && (
              <ModalNoProducts />
            )}
            {productsInLStorage &&
              productsInLStorage.length > 0 &&
              productsInLStorage.map((item, index) => (
                <ModalWithProducts key={item.id} item={item} index={index} />
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
