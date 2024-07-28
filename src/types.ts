export type Product = {
  productVariant: string;
  productColour: string;
  productPrice: number;
  inStock: boolean;
  imageUrl: string;
};

export type ProductVariants = Record<string, Product>;
