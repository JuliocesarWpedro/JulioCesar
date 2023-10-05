import React from 'react';
import { colors } from '../../../../ts/Products';
import styles from './FilterByColor.module.scss';
import { useFilter } from '../../../../Contexts/FilterContext';

const FilterByColor = () => {
  const { toggleColor } = useFilter();

  return (
    <>
      {colors.slice(0, colors.length).map((color) => (
        <div className={styles.colorContainer} key={color}>
          <input id={color} type="checkbox" />
          <label htmlFor={color} onClick={() => toggleColor(color)}>
            {color}
          </label>
        </div>
      ))}
    </>
  );
};

export default FilterByColor;
