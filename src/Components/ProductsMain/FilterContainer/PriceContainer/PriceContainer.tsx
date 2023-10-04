import styles from './PriceContainer.module.scss';
import { prices } from '../../../../ts/Products';
import { useFilter } from '../../../../Contexts/FilterContext';

const PriceContainer = () => {
  const { selectedPrice, setSelectedPrice } = useFilter();

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = JSON.parse(event.target.value);

    if (
      selectedPrice &&
      selectedValue.minPrice === selectedPrice.minPrice &&
      selectedValue.maxPrice === selectedPrice.maxPrice
    ) {
      setSelectedPrice(null); // Desmarca o checkbox se ele já estiver selecionado
    } else {
      setSelectedPrice(selectedValue); // Marca o checkbox selecionado
    }
  };

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
