import React from 'react';
import styles from './OrderList.module.scss';
import arrowIcon from '../../../../img/Icons/ArrowIcon.svg';

const OrderList = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  function handleOrder(option: string) {
    if (option === 'recent') {
      console.log('recent');
    } else if (option === 'lowestPrice') {
      console.log('menor preço');
    } else if (option === 'biggestPrice') {
      console.log('Maior preço');
    }
  }

  return (
    <div onClick={() => setIsOpen(!isOpen)} className={styles.boxOrderList}>
      <p className={styles.orderListText}>
        Ordenar por: <img src={arrowIcon} alt=""></img>
      </p>
      {isOpen && (
        <ul className={styles.listOpen}>
          <li onClick={() => handleOrder('recent')} className={styles.option}>
            Mais recentes
          </li>
          <li
            onClick={() => handleOrder('lowestPrice')}
            className={styles.option}
          >
            Menor preço
          </li>
          <li
            onClick={() => handleOrder('biggestPrice')}
            className={styles.option}
          >
            Maior preço
          </li>
        </ul>
      )}
    </div>
  );
};

export default OrderList;
