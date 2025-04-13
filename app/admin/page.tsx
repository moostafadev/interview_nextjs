"use client";

import { Button } from "@/components/ui/button";
import { IProduct } from "@/interfaces/product";
import { Pencil } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Delete from "./components/Delete";

const Admin = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProducts = async () => {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products`);
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id: number) => {
    await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
      method: "DELETE",
    });
    fetchProducts();
  };

  return (
    <section className="min-h-screen">
      <div className="container flex flex-col gap-6">
        <h1 className="text-2xl font-bold">Admin</h1>
        <div className="overflow-x-scroll 2xl:overflow-x-hidden">
          <div className="flex flex-col gap-3 min-w-[1200px]">
            <ul className="flex justify-between items-center bg-neutral-200 gap-[1px] border-neutral-300 border-[1px]">
              <li className="bg-green-800 p-4 flex-1 text-center">id</li>
              <li className="bg-green-800 p-4 flex-1 text-center">name</li>
              <li className="bg-green-800 p-4 flex-1 text-center">desc</li>
              <li className="bg-green-800 p-4 flex-1 text-center">price</li>
              <li className="bg-green-800 p-4 flex-1 text-center">category</li>
              <li className="bg-green-800 p-4 flex-1 text-center">image</li>
              <li className="bg-green-800 p-4 flex-1 text-center">Action</li>
            </ul>
            {products.map((product) => (
              <ul
                key={product.id}
                className="flex justify-between items-center gap-[1px] border-neutral-300 border-[1px]"
              >
                <li className="p-4 flex-1 text-center">{product.id}</li>
                <li className="p-4 flex-1 text-center">{product.title}</li>
                <li className="p-4 flex-1 text-center">
                  {product.description.slice(0, 20)}
                </li>
                <li className="p-4 flex-1 text-center">$ {product.price}</li>
                <li className="p-4 flex-1 text-center">
                  {product.category.name}
                </li>
                <li className="p-4 flex-1 text-center flex justify-center items-center">
                  <Image
                    src={product.images[0]}
                    alt={product.title}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </li>
                <li className="p-4 flex-1 flex items-center gap-2 justify-end">
                  <Button>
                    <Pencil />
                  </Button>
                  <Delete onDelete={() => handleDelete(product.id)} />
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
