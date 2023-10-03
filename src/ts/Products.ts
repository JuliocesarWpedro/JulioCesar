export interface Products {
  id: string;
  name: string;
  price: number;
  parcelamento: Array<number>;
  color: string;
  image: string;
  size: Array<string>;
  date: string;
}

export const colors = [
  'Amarelo',
  'Azul',
  'Branco',
  'Cinza',
  'Laranja',
  'Verde',
  'Vermelho',
  'Preto',
  'Rosa',
  'Vinho',
];

export const sizes = ['P', 'M', 'G', 'GG', 'U', 36, 38, 40, 42, 44, 46];

export const prices = [
  {
    value: 'de R$0 até R$50',
    minPrice: 1,
    maxPrice: 50,
  },
  {
    value: 'de R$51 até R$150',
    minPrice: 51,
    maxPrice: 150,
  },
  {
    value: 'de R$151 até R$300',
    minPrice: 151,
    maxPrice: 300,
  },
  {
    value: 'de R$301 até R$500',
    minPrice: 301,
    maxPrice: 500,
  },
  {
    value: 'a partir de R$500',
    minPrice: 500,
    maxPrice: 999999,
  },
];
