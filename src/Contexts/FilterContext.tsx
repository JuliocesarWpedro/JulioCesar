import React from 'react';
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
  const [selectedPrice, setSelectedPrice] = React.useState<Price | null>(null);
  const [selectedColors, setSelectedColors] = React.useState<string[] | []>([]);
  const [selectedSizes, setSelectedSizes] = React.useState<Size[] | []>([]);
  const [orderOption, setOrderOption] = React.useState<string>('');

  const toggleColor = (color: string) => {
    setSelectedColors((prevState) => {
      const prevColors = prevState as string[];
      if (prevColors.includes(color)) {
        return prevState.filter((item) => item !== color) as string[]; // Correção do tipo
      } else {
        return [...prevState, color] as string[]; // Correção do tipo
      }
    });
  };

  function handleOrder(option: string) {
    if (option === 'recent') {
      setOrderOption('recent');
    } else if (option === 'lowestPrice') {
      setOrderOption('lowestPrice');
    } else if (option === 'biggestPrice') {
      setOrderOption('biggestPrice');
    } else {
      setOrderOption('');
    }
  }

  const toggleSize = (size: Size) => {
    setSelectedSizes((prevSizes) => {
      const prevSizesArray = prevSizes as Size[];
      if (prevSizesArray.includes(size)) {
        return prevSizes.filter((prevSize) => prevSize !== size);
      } else {
        return [...prevSizes, size];
      }
    });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = JSON.parse(event.target.value);

    if (
      selectedPrice &&
      selectedValue.minPrice === selectedPrice.minPrice &&
      selectedValue.maxPrice === selectedPrice.maxPrice
    ) {
      setSelectedPrice(null); // Desmarca o checkbox se ele já estiver selecionado
    } else {
      setSelectedPrice(selectedValue); // Marca o checkbox selecionado
    }
  };

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
