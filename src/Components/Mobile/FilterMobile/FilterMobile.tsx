import React from 'react';
import styles from './FilterMobile.module.scss';
import { useFilter } from '../../../Contexts/FilterContext';

const FilterMobile = ({
  setOpenModalFilter,
  setOpenModalOrder,
}: {
  setOpenModalFilter: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenModalOrder: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { setSelectedPrice, setSelectedColors, setSelectedSizes } = useFilter();

  return (
    <div className={styles.filterMobile}>
      <button
        onClick={() => {
          setOpenModalFilter(true),
            setSelectedPrice(null),
            setSelectedColors([]),
            setSelectedSizes([]);
        }}
      >
        Filtrar
      </button>
      <button onClick={() => setOpenModalOrder(true)}>Ordenar</button>
    </div>
  );
};

export default FilterMobile;
