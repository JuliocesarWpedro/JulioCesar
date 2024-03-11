import React, { useCallback, useState } from 'react';
import { Price } from '../ts/Products';

type Size = string;

interface IFilter {
  orderOption: string;
  setOrderOption: React.Dispatch<React.SetStateAction<string>>;
  selectedPrice: Price | null;
  setSelectedPrice: React.Dispatch<React.SetStateAction<Price | null>>;
  selectedSizes: Size[] | [];
  setSelectedSizes: React.Dispatch<React.SetStateAction<[] | Size[]>>;
  selectedColors: string[] | [];
  setSelectedColors: React.Dispatch<React.SetStateAction<[] | string[]>>;
  toggleColor: (color: string) => void;
  toggleSize: (size: Size) => void;
  handleOrder: (option: string) => void;
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterContext = React.createContext<IFilter | null>(null);

export function FilterContextProvider({ children }: React.PropsWithChildren) {
  const [selectedPrice, setSelectedPrice] = useState<Price | null>(null);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<Size[]>([]);
  const [orderOption, setOrderOption] = useState<string>('');

  const toggleColor = useCallback((color: string) => {
    setSelectedColors((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((item) => item !== color)
        : [...prevColors, color],
    );
  }, []);

  const handleOrder = useCallback((option: string) => {
    setOrderOption((prevOption) => (prevOption === option ? '' : option));
  }, []);

  const toggleSize = useCallback((size: Size) => {
    setSelectedSizes((prevSizes) =>
      prevSizes.includes(size)
        ? prevSizes.filter((prevSize) => prevSize !== size)
        : [...prevSizes, size],
    );
  }, []);

  const handleCheckboxChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedValue = JSON.parse(event.target.value);

      setSelectedPrice((prevPrice) =>
        prevPrice &&
        selectedValue.minPrice === prevPrice.minPrice &&
        selectedValue.maxPrice === prevPrice.maxPrice
          ? null
          : selectedValue,
      );
    },
    [],
  );

  return (
    <FilterContext.Provider
      value={{
        handleOrder,
        handleCheckboxChange,
        toggleSize,
        toggleColor,
        orderOption,
        setOrderOption,
        selectedPrice,
        setSelectedPrice,
        selectedColors,
        setSelectedColors,
        selectedSizes,
        setSelectedSizes,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = React.useContext(FilterContext);
  if (context === null) {
    throw new Error('useFilter must be used within a FilterContextProvider');
  }
  return context;
}
