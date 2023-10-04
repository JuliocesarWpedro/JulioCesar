import React from 'react';
import { Price } from '../ts/Products';

type Size = string | number;

interface IFilter {
  orderOption: string;
  setOrderOption: React.Dispatch<React.SetStateAction<string>>;
  selectedPrice: Price | null;
  setSelectedPrice: React.Dispatch<React.SetStateAction<Price | null>>;
  selectedSizes: Size[] | [];
  setSelectedSizes: React.Dispatch<React.SetStateAction<[] | Size[]>>;
  selectedColors: string[] | [];
  setSelectedColors: React.Dispatch<React.SetStateAction<[] | string[]>>;
}

const FilterContext = React.createContext<IFilter | null>(null);

export function FilterContextProvider({ children }: React.PropsWithChildren) {
  const [selectedPrice, setSelectedPrice] = React.useState<Price | null>(null);
  const [selectedColors, setSelectedColors] = React.useState<string[] | []>([]);
  const [selectedSizes, setSelectedSizes] = React.useState<Size[] | []>([]);
  const [orderOption, setOrderOption] = React.useState<string>('');

  return (
    <FilterContext.Provider
      value={{
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
