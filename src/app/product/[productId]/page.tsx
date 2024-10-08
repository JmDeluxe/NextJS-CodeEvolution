import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resole) => {
    setTimeout(() => {
      resole("iPhone" + params.productId);
    }, 100);
  });

  return {
    title: "Product " + title,
  };
};

const ProductDetails = ({ params }: Props) => {
  return <div>ProductDetails {params.productId}</div>;
};

export default ProductDetails;
