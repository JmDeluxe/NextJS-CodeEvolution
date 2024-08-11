"use client";
import React from "react";
import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

const ProductReview = ({
  params,
}: {
  params: { productId: string; reviewsId: string };
}) => {
  if (parseInt(params.reviewsId) > 1000) {
    notFound();
  }

  // const random = getRandomInt(2);

  // if (random === 1) {
  //   throw new Error("Something went wrong");
  // }

  return (
    <h1>
      Reviews {params.reviewsId} for product {params.productId}
    </h1>
  );
};

export default ProductReview;
