import React from 'react';
import { prices } from '../../../../ts/Products';
import styles from './FilterByPrice.module.scss';
import { useFilter } from '../../../../Contexts/FilterContext';

const FilterByPrice = () => {
  const { selectedPrice, handleCheckboxChange } = useFilter();

  return (
    <>
      {prices.map((price) => (
        <div className={styles.priceContainer} key={price.value}>
          <input
            type="checkbox"
            id={String(price.minPrice)}
            name="price"
            checked={selectedPrice?.value === price.value}
            value={JSON.stringify(price)}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={String(price.minPrice)}>{price.value}</label>
        </div>
      ))}
    </>
  );
};

export default FilterByPrice;
