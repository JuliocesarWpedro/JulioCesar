import React from 'react';
import styles from './ColorContainer.module.scss';
import { colors } from '../../../../ts/Products';
import ArrowIcon from '../../../../img/Icons/ArrowIcon.svg';
import { useFilter } from '../../../../Contexts/FilterContext';

const ColorContainer = () => {
  const [numberMaxColor, setNumberMaxColor] = React.useState<number>(5);

  const { toggleColor } = useFilter();

  return (
    <>
      {colors.slice(0, numberMaxColor).map((color) => (
        <div className={styles.colorContainer} key={color}>
          <input id={color} type="checkbox" />
          <label htmlFor={color} onClick={() => toggleColor(color)}>
            {color}
          </label>
        </div>
      ))}
      {numberMaxColor < colors.length && (
        <div
          className={styles.moreColors}
          onClick={() => setNumberMaxColor(colors.length)}
        >
          <p>Ver todas as cores</p>
          <img src={ArrowIcon} alt="Arrow Icon" />
        </div>
      )}
    </>
  );
};

export default ColorContainer;
