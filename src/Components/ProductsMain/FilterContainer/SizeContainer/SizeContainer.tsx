import React from 'react';
import styles from './SizeContainer.module.scss';
import { sizes } from '../../../../ts/Products';
import { useFilter } from '../../../../Contexts/FilterContext';

type Size = string;

const SizeContainer = () => {
  const { toggleSize } = useFilter();

  return (
    <div className={styles.sizeContainer}>
      {sizes.map((size) => (
        <div key={size}>
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

export default SizeContainer;
