import React from "react";
import { notFound } from "next/navigation";

const ProductReview = ({
  params,
}: {
  params: { productId: string; reviewsId: string };
}) => {
    if(parseInt(params.reviewsId) > 1000) {
        notFound()
    }

  return (
    <div>
      Reviews {params.reviewsId} for product {params.productId}
    </div>
  );
};

export default ProductReview;
