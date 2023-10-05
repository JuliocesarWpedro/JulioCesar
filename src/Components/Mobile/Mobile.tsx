import React from 'react';
import styles from './Mobile.module.scss';
import FilterMobile from './FilterMobile/FilterMobile';
import FilterModalMobile from './FilterModalMobile.tsx/FilterModalMobile.tsx';
import OrderModalMobile from './OrderList/OrderModalMobile.tsx';

const Mobile = () => {
  const [openModalFilter, setOpenModalFilter] = React.useState<boolean>(false);
  const [openModalOrder, setOpenModalOrder] = React.useState<boolean>(false);

  React.useEffect(() => {
    document.body.style.overflow = openModalFilter ? 'hidden' : 'auto';
  }, [openModalFilter]);

  React.useEffect(() => {
    document.body.style.overflow = openModalOrder ? 'hidden' : 'auto';
  }, [openModalOrder]);

  return (
    <>
      <div className={styles.mobile}>
        <h3 className={styles.titleMobile}>Blusas</h3>
        <FilterMobile
          setOpenModalOrder={setOpenModalOrder}
          setOpenModalFilter={setOpenModalFilter}
        />
      </div>
      {openModalFilter && (
        <FilterModalMobile setOpenModalFilter={setOpenModalFilter} />
      )}
      {openModalOrder && (
        <OrderModalMobile setOpenModalOrder={setOpenModalOrder} />
      )}
    </>
  );
};

export default Mobile;
