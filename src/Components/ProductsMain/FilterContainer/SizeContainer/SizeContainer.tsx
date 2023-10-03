import React from 'react';
import styles from './SizeContainer.module.scss';
import { sizes } from '../../../../ts/Products';

type Size = string | number;

const SizeContainer = () => {
  const [selectedSizes, setSelectedSizes] = React.useState<Size[]>([]);
  console.log(selectedSizes);

  const toggleSize = (size: Size) => {
    setSelectedSizes((prevSizes) => {
      if (prevSizes.includes(size)) {
        return prevSizes.filter((prevSize) => prevSize !== size);
      } else {
        return [...prevSizes, size];
      }
    });
  };

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
