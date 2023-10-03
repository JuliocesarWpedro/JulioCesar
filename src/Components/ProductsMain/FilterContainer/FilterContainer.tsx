import styles from './FilterContainer.module.scss';
import ColorContainer from './ColorContainer/ColorContainer';
import SizeContainer from './SizeContainer/SizeContainer';
import PriceContainer from './PriceContainer/PriceContainer';

const FilterContainer = () => {
  return (
    <div className={styles.filterContainer}>
      <h1 className={styles.filterTitle}>CORES</h1>
      <ColorContainer />
      <h1 className={styles.filterTitle}>TAMANHO</h1>
      <SizeContainer />
      <h1 className={styles.filterTitle}>FAIXA DE PREÇO</h1>
      <PriceContainer />
    </div>
  );
};

export default FilterContainer;
