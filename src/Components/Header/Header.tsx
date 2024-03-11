import CartIcon from '../../img/Icons/CartIcon.svg';
import styles from './Header.module.scss';
import { useCart } from '../../Contexts/CartContext';

const Header = () => {
  const { toggleCart, cartItems } = useCart();

  return (
    <header className={styles.header}>
      <a href="/">
        <h2>Clothing Store</h2>
      </a>
      <div onClick={() => toggleCart()} className={styles.cart}>
        <img src={CartIcon} alt="Cart Icon" />
        <div className={styles.cartCount}>
          <span>{cartItems.length}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
