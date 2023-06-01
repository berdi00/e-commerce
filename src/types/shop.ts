export type TProduct = TCategoryProduct;
export type TCategoryProduct = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  others: TProduct[];
};

export type TProductAgain = {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
};

export type TCategory = {
  category_id: number;
  title: string;
  products: TProductAgain[];
};

export type TCategories = TCategory[];
