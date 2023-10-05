import styles from './ModalWithProducts.module.scss';
import { formatPrice } from '../../ProductsMain/ProductsContainer/Product/ProductItens';
import { CartItem, useCart } from '../../../Contexts/CartContext';

const ModalWithProducts = ({
  item,
  index,
}: {
  item: CartItem;
  index: number;
}) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div key={index} className={styles.modalProducts}>
      <div>
        <img src={item.image} alt="Imagem Products" />
      </div>
      <div className={styles.productItem}>
        <h2>{item.name}</h2>
        <p>R$ {formatPrice(item.price * item.quantity)}</p>
        <div className={styles.quantityContainer}>
          <button onClick={() => decreaseQuantity(item)}>-</button>
          <div className={styles.quantity}>{item.quantity}</div>
          <button onClick={() => increaseQuantity(item)}>+</button>
        </div>
        <button
          onClick={() => removeFromCart(item.id)}
          className={styles.productRemove}
        >
          Remover
        </button>
      </div>
    </div>
  );
};

export default ModalWithProducts;
