import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ProductsMain from './Components/ProductsMain/ProductsMain';

import TopContainer from './Components/mainContainer/TopContainer/TopContainer';
import { FilterContextProvider } from './Contexts/FilterContext';

const App = () => {
  return (
    <>
      <Header />
      <FilterContextProvider>
        <TopContainer />
        <ProductsMain />
      </FilterContextProvider>
      <Footer />
    </>
  );
};

export default App;
