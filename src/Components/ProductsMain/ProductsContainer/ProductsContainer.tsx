import React from 'react';
import styles from './ProductsContainer.module.scss';
import ProductItens from './Product/ProductItens';

const ProductsContainer = () => {
  const [limitProducts, setLimitProducts] = React.useState(9);
  const [showButton, setShowButton] = React.useState(false);

  function modifyLimit() {
    setLimitProducts((products) => products + 3);
  }

  return (
    <main className={styles.productsContainer}>
      <ProductItens
        limitProducts={limitProducts}
        setShowButton={setShowButton}
      />
      {showButton === true && (
        <button onClick={() => modifyLimit()} className={styles.loadMore}>
          CARREGAR MAIS
        </button>
      )}
    </main>
  );
};

export default ProductsContainer;
