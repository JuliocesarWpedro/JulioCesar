import React from 'react';
import { useFilter } from '../../../Contexts/FilterContext';
import styles from './ProductsContainer.module.scss';

const ProductsContainer = () => {
  const { selectedPrice, selectedColors, selectedSizes } = useFilter();

  return <div className={styles.productsContainer}>
    
  </div>;
};

export default ProductsContainer;
