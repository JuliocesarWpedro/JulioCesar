import FilterContainer from './FilterContainer/FilterContainer';
import ProductsContainer from './ProductsContainer/ProductsContainer';
import styles from './ProductsMain.module.scss';

const ProductsMain = () => {
  return (
    <div className={styles.productsMain}>
      <FilterContainer />
      <ProductsContainer />
    </div>
  );
};

export default ProductsMain;
