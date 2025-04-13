import { IProduct } from "@/interfaces/product";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Product = ({ product }: { product: IProduct }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.images[0]}
          alt={product.title}
          className="w-full h-80 object-cover mb-4 rounded-lg"
          width={200}
          height={200}
        />
      </Link>
      <h2 className="text-xl font-semibold">{product.title}</h2>
      <p className="text-gray-600 dark:text-gray-400">$ {product.price}</p>
      <p className="text-gray-600 dark:text-gray-400">
        {product.description.slice(0, 30)}...
      </p>
    </div>
  );
};

export default Product;
