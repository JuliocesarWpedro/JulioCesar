import React from 'react';
import useFetch from '../../../../Hooks/useFetch';
import { Products } from '../../../../ts/Products';
import styles from './ProductItens.module.scss';
import { useFilter } from '../../../../Contexts/FilterContext';
import { useCart } from '../../../../Contexts/CartContext';

export const formatPrice = (price: number): string => {
  const formattedPrice = price.toFixed(2);
  return formattedPrice.replace('.', ',');
};

const ProductItens = ({
  limitProducts,
  setShowButton,
}: {
  limitProducts: number;
  setShowButton: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { data, loading } = useFetch<Products[]>(
    'https://api-storage-products.vercel.app/products',
  );

  const { toggleCart, addToCart } = useCart();

  const { selectedPrice, selectedColors, selectedSizes, orderOption } =
    useFilter();

  const filteredProducts = React.useMemo(() => {
    let products = data ? [...data] : [];

    if ((selectedColors as string[]).length > 0) {
      products = products.filter((product) =>
        (selectedColors as string[]).includes(product.color),
      );
    }

    if (Array.isArray(selectedSizes) && selectedSizes.length > 0) {
      products = products.filter((product) => {
        if (Array.isArray(product.size)) {
          const hasSelectedSize = selectedSizes.some((size) =>
            product.size.includes(size),
          );
          return hasSelectedSize;
        }
        return false;
      });
    }

    if (selectedPrice !== null) {
      products = products.filter((product) => {
        return (
          typeof product.price === 'number' &&
          product.price >= selectedPrice.minPrice &&
          product.price <= selectedPrice.maxPrice
        );
      });
    }

    if (orderOption === 'recent') {
      products.sort((a, b) => +b.id - +a.id);
    } else if (orderOption === 'lowestPrice') {
      products.sort((a, b) => a.price - b.price);
    } else if (orderOption === 'biggestPrice') {
      products.sort((a, b) => b.price - a.price);
    }

    return products;
  }, [data, selectedColors, selectedSizes, selectedPrice, orderOption]);

  React.useEffect(() => {
    if (data && limitProducts >= filteredProducts.length) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  }, [data, limitProducts, setShowButton, filteredProducts]);

  return (
    <div className={styles.productItens}>
      {loading &&
        Array.from({ length: limitProducts }).map((_, index) => (
          <div className={styles.productItemLoading} key={index}></div>
        ))}
      {data !== null &&
        filteredProducts &&
        filteredProducts.slice(0, limitProducts).map((item) => (
          <div className={styles.productItem} key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{formatPrice(item.price)}</p>
            <h4>
              até {item.parcelamento[0]}x de R$
              {formatPrice(item.parcelamento[1])}
            </h4>
            <button
              onClick={() => {
                addToCart(item);
                toggleCart();
              }}
              type="button"
            >
              COMPRAR
            </button>
          </div>
        ))}
    </div>
  );
};
export default ProductItens;
