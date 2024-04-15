import React, { useContext } from "react";
import SingleProduct from "../components/SingleProduct";
import { ProductContext } from "../context/ProductContext";

const Products = () => {
  const [product] = useContext(ProductContext);
  return (
    <>
      <h2 className="text-center my-5">Products</h2>
      <div className="container">
        <div className="row">
          {product.map((item) => (
            <SingleProduct
              desc={item.description}
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.images}
              ram={item.ram}
              cpu={item.cpu}
              gpu={item.gpu}
              display={item.display}
              price={item.price}
              alldata={item}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
