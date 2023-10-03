import TopContainer from './TopContainer/TopContainer';
import styles from './mainContainer.module.scss';

const MainContainer = () => {
  return (
    <main className={styles.mainContainer}>
      <TopContainer />
    </main>
  );
};

export default MainContainer;
