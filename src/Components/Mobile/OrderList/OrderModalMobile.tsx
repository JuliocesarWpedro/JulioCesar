import React from 'react';
import styles from './OrderModalMobile.module.scss';
import closeIcon from '../../../img/Icons/Close.svg';
import { useFilter } from '../../../Contexts/FilterContext';

const OrderModalMobile = ({
  setOpenModalOrder,
}: {
  setOpenModalOrder: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { setOrderOption, handleOrder } = useFilter();

  return (
    <div className={styles.orderModalMobile}>
      <div className={styles.orderModalContainer}>
        <div className={styles.mainModalContainer}>
          <div className={styles.topOrderContainer}>
            <h2>ORDENAR</h2>
            <img
              onClick={() => {
                setOpenModalOrder(false), setOrderOption('');
              }}
              src={closeIcon}
              alt="Close Icon"
            />
          </div>
          <ul className={styles.listOrder}>
            <li
              onClick={() => {
                setOpenModalOrder(false), handleOrder('recent');
              }}
            >
              Mais recente
            </li>
            <li
              onClick={() => {
                setOpenModalOrder(false), handleOrder('biggestPrice');
              }}
            >
              Maior preço
            </li>
            <li
              onClick={() => {
                setOpenModalOrder(false), handleOrder('lowestPrice');
              }}
            >
              Menor preço
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderModalMobile;
