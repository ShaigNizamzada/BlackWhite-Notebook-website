import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext("");
export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://mocki.io/v1/56bbf816-f6c7-4217-a8f3-819206681c73")
      .then((res) => setProduct(res.data));
  }, []);
  return (
    <ProductContext.Provider value={[product, setProduct]}>
      {children}
    </ProductContext.Provider>
  );
};
