import React from 'react';
import styles from './FilterBySize.module.scss';
import { sizes } from '../../../../ts/Products';
import { useFilter } from '../../../../Contexts/FilterContext';

const FilterBySize = () => {
  const { toggleSize } = useFilter();

  return (
    <div className={styles.sizeContainer}>
      {sizes &&
        sizes.map((size) => (
          <div className={styles.filterSizes} key={size}>
            <input id={String(size)} type="checkbox" />
            <button type="button">
              <label htmlFor={String(size)} onClick={() => toggleSize(size)}>
                {size}
              </label>
            </button>
          </div>
        ))}
    </div>
  );
};

export default FilterBySize;
