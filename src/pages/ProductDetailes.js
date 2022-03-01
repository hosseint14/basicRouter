import { Fragment } from "react";
import { useParams } from "react-router-dom";

const ProductDetailes = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Product Detailes</h1>
      <p>{params.someId}</p>
    </Fragment>
  );
};

export default ProductDetailes;
