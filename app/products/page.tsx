import Product from "@/components/Product";
import { IProduct } from "@/interfaces/product";
import React from "react";

const ProductsPage = async () => {
  const products: IProduct[] = await fetch(
    `${process.env.PUBLIC_API_URL}/products`
  ).then((res) => res.json());

  return (
    <>
      <section>
        <div className="container p-4 flex flex-col gap-6">
          <h1 className="text-2xl font-bold">Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
