import imageLogo from '../../img/logo-m3.png';
import CartIcon from '../../img/Icons/CartIcon.svg';
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header>
      <a href="/">
        <img src={imageLogo} alt="Imagem Logo" />
      </a>
      <div className={styles.cart}>
        <img src={CartIcon} alt="Cart Icon" />
        <div className={styles.cartCount}>
          <span>2</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
