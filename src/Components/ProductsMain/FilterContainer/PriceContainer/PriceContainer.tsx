import React from 'react';
import styles from './PriceContainer.module.scss';
import { prices } from '../../../../ts/Products';
import { useFilter } from '../../../../Contexts/FilterContext';

const PriceContainer = () => {
  const { selectedPrice, setSelectedPrice } = useFilter();

  console.log(selectedPrice);

  return (
    <>
      {prices.map((price) => (
        <div className={styles.priceContainer} key={price.value}>
          <input
            type="radio"
            id={String(price.minPrice)}
            name="price"
            value={JSON.stringify(price)}
            onChange={(event) =>
              setSelectedPrice(JSON.parse(event.target.value))
            }
          />
          <label htmlFor={String(price.minPrice)}>{price.value}</label>
        </div>
      ))}
    </>
  );
};

export default PriceContainer;
