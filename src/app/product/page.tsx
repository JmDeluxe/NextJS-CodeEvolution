import React from "react";
import Link from "next/link";

const ProductList = () => {
  const productId = 100;
  return (
    <>
      <h1>Product List</h1>
      <h2>
        <Link href="/product/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="/product/2">Product 2</Link>
      </h2>
      <h2>
        <Link href={`/product/${productId}`} replace>
          Product 3
        </Link>
      </h2>
      <Link href="/">Home</Link>
    </>
  );
};

export default ProductList;
