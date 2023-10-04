import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ModalCart from './Components/ModalCart/ModalCart';
import ProductsMain from './Components/ProductsMain/ProductsMain';

import TopContainer from './Components/mainContainer/TopContainer/TopContainer';
import { CartContextProvider } from './Contexts/CartContext';
import { FilterContextProvider } from './Contexts/FilterContext';

const App = () => {
  return (
    <>
      <CartContextProvider>
        <FilterContextProvider>
          <Header />
          <TopContainer />
          <ProductsMain />
          <Footer />
          <ModalCart />
        </FilterContextProvider>
      </CartContextProvider>
    </>
  );
};

export default App;
