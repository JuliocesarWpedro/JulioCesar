import React from 'react';
import styles from './FilterModalMobile.tsx.module.scss';
import closeIcon from '../../../img/Icons/Close.svg';
import ArrowIcon from '../../../img/Icons/ArrowIcon.svg';
import FilterByColor from './FilterByColor/FilterByColor';
import FilterBySize from './FilterBySize/FilterBySize';
import FilterByPrice from './FilterByPrice/FilterByPrice';

const FilterModalMobile = ({
  setOpenModalFilter,
}: {
  setOpenModalFilter: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [openColors, setOpenColors] = React.useState<boolean>(false);
  const [openSizes, setOpenSizes] = React.useState<boolean>(false);
  const [openPrices, setOpenPrices] = React.useState<boolean>(false);

  return (
    <div className={styles.filterContainer}>
      <div className={styles.topFilterContainer}>
        <h2>FILTRAR</h2>
        <img
          onClick={() => setOpenModalFilter(false)}
          src={closeIcon}
          alt="Close Icon"
        />
      </div>
      <div className={styles.containerFilters}>
        <div className={styles.ContainerFilter}>
          <div
            onClick={() => setOpenColors(!openColors)}
            className={styles.TextItemFilter}
          >
            <h3>CORES</h3>
            <img src={ArrowIcon} alt="Arrow Icon" />
          </div>
          {openColors && <FilterByColor />}
        </div>
        <div className={styles.ContainerFilter}>
          <div
            onClick={() => setOpenSizes(!openSizes)}
            className={styles.TextItemFilter}
          >
            <h3>TAMANHOS</h3>
            <img src={ArrowIcon} alt="Arrow Icon" />
          </div>
          {openSizes && <FilterBySize />}
        </div>
        <div className={styles.ContainerFilter}>
          <div
            onClick={() => setOpenPrices(!openPrices)}
            className={styles.TextItemFilter}
          >
            <h3>FAIXA DE PREÇO</h3>
            <img src={ArrowIcon} alt="Arrow Icon" />
          </div>
          {openPrices && <FilterByPrice />}
        </div>
      </div>
    </div>
  );
};

export default FilterModalMobile;
