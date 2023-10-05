import styles from './PriceContainer.module.scss';
import { prices } from '../../../../ts/Products';
import { useFilter } from '../../../../Contexts/FilterContext';

const PriceContainer = () => {
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

export default PriceContainer;
