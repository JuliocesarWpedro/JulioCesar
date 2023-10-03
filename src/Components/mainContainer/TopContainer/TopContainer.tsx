import OrderList from './OrderList/OrderList';
import TitleTopContainer from './TitleTopContainer/TitleTopContainer';
import styles from './TopContainer.module.scss';

const TopContainer = () => {
  return (
    <div className={styles.topContainer}>
      <TitleTopContainer />
      <OrderList />
    </div>
  );
};

export default TopContainer;
