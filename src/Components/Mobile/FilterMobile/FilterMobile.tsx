import React from 'react';
import styles from './FilterMobile.module.scss';

const FilterMobile = ({
  setOpenModalFilter,
  setOpenModalOrder,
}: {
  setOpenModalFilter: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenModalOrder: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className={styles.filterMobile}>
      <button onClick={() => setOpenModalFilter(true)}>Filtrar</button>
      <button onClick={() => setOpenModalOrder(true)}>Ordenar</button>
    </div>
  );
};

export default FilterMobile;
