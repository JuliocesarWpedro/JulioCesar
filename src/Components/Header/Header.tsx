import imageLogo from '../../img/logo-m3.png';
import CartIcon from '../../img/Icons/CartIcon.svg';
import styles from './Header.module.scss';
import { useCart } from '../../Contexts/CartContext';

const Header = () => {
  const { toggleCart, cartItems } = useCart();

  return (
    <header className={styles.header}>
      <a href="https://m3ecommerce.com/">
        <img src={imageLogo} alt="Imagem Logo" />
      </a>
      <div onClick={() => toggleCart()} className={styles.cart}>
        <img src={CartIcon} alt="Cart Icon" />
        <div className={styles.cartCount}>
          <span>
            {cartItems.reduce(
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
