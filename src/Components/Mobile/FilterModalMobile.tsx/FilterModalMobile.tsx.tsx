import React from 'react';
import styles from './FilterModalMobile.tsx.module.scss';
import closeIcon from '../../../img/Icons/Close.svg';

const FilterModalMobile = ({
  setOpenModalFilter,
}: {
  setOpenModalFilter: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className={styles.filterMobile}>
      <div className={styles.filterContainer}>
        <div className={styles.topFilterContainer}>
          <h2>FILTRAR</h2>
          <img
            onClick={() => setOpenModalFilter(false)}
            src={closeIcon}
            alt="Close Icon"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterModalMobile;
