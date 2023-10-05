import React, { useEffect } from 'react';
import styles from './ProductsContainer.module.scss';
import ProductItens from './Product/ProductItens';

const ProductsContainer = () => {
  const [limitProducts, setLimitProducts] = React.useState(9);
  const [showButton, setShowButton] = React.useState(false);

  const handleResize = () => {
    if (window.innerWidth < 600) {
      setLimitProducts(4);
    } else {
      setLimitProducts(9);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function modifyLimit() {
    setLimitProducts((prevLimit) => {
      const increaseAmount = window.innerWidth < 600 ? 4 : 3;
      return prevLimit + increaseAmount;
    });
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
