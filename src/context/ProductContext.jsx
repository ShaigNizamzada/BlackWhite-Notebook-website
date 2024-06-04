import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext("");
export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://mocki.io/v1/d0c788f2-2236-40e7-b525-835ff4e91d38")
      .then((res) => setProduct(res.data));
  }, []);
  return (
    <ProductContext.Provider value={[product, setProduct]}>
      {children}
    </ProductContext.Provider>
  );
};
