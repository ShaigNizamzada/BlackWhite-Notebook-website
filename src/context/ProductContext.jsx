import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext("");
export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://mocki.io/v1/f0be4f75-5b11-4482-9505-16fe43d6a466")
      .then((res) => setProduct(res.data));
  }, []);
  return (
    <ProductContext.Provider value={[product, setProduct]}>
      {children}
    </ProductContext.Provider>
  );
};
