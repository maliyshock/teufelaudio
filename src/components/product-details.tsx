import "./product-details.scss";
import { useCallback, useMemo, useState } from "react";
import { Product, ProductVariants } from "../types.ts";
import { DOMAIN, IMG_FOLDER, PARAMETERS } from "../consts.ts";
import { Pallete } from "./pallete.tsx";

const IMG_PATH = DOMAIN.concat(IMG_FOLDER, PARAMETERS);

const price = new Intl.NumberFormat("en-EU", {
  style: "currency",
  minimumFractionDigits: 2,
  currency: "EUR",
});

export function ProductDetails({ variants }: ProductVariants) {
  const [active, setActive] = useState(0);
  const memoizedDetails = useMemo(() => variants && (Object.entries(variants) as [string, Product][]), [variants]);
  const [, currentProduct] = memoizedDetails[active];
  const handleOnSelect = useCallback(index => {
    setActive(index);
  }, []);

  return (
    <div className="product-details">
      <img alt="Night Black BOOMSTER Go" className="product-details__image" src={`${IMG_PATH}${currentProduct.imageUrl}`} />
      <h1 className="product-details__name">{currentProduct.productVariant}</h1>
      <span className="price product-details__price">{price.format(currentProduct.productPrice / 100)}</span>
      <Pallete
        activeIndex={active}
        className="product-details__pallete"
        colors={memoizedDetails.map(([key, product]) => product.productColour)}
        onSelect={handleOnSelect}
      />
      <button className="button">Buy now</button>
    </div>
  );
}
