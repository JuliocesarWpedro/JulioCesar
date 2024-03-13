import CartIcon from '../../img/Icons/CartIcon.svg';
import styles from './Header.module.scss';
import { useCart } from '../../Contexts/CartContext';

const Header = () => {
  const { toggleCart, productsInLStorage } = useCart();

  return (
    <header className={styles.header}>
      <a href="/">
        <h2>Clothing Store</h2>
      </a>
      <div onClick={() => toggleCart()} className={styles.cart}>
        <img src={CartIcon} alt="Cart Icon" />
        <div className={styles.cartCount}>
          <span>
            {productsInLStorage &&
              productsInLStorage.reduce(
                (accumulator, current) => (accumulator += current.quantity),
                0,
              )}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
