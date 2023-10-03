import React from 'react';
import styles from './ColorContainer.module.scss';
import { colors } from '../../../../ts/Products';
import ArrowIcon from '../../../../img/Icons/ArrowIcon.svg';

const ColorContainer = () => {
  const [numberMaxColor, setNumberMaxColor] = React.useState<number>(5);
  const [selectedColors, setSelectedColors] = React.useState<string[]>([]);

  console.log(selectedColors);

  const toggleColor = (color: string) => {
    setSelectedColors((prevState) => {
      if (prevState.includes(color)) {
        return prevState.filter((item) => item !== color);
      } else {
        return [...prevState, color];
      }
    });
  };

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
          <img src={ArrowIcon} alt="arrow" />
        </div>
      )}
    </>
  );
};

export default ColorContainer;
