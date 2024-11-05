"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import Card from "./components/Card/Card";

export default function Home() {

  const [productsResponse, setProductsResponse] = useState<ProductsResponse>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products", {
          method: "GET",
        });
        setProductsResponse(await response.json());
      } catch (error: any) { alert(error.toString()); }
    }
    fetchProducts();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <div className="flex flex-col z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex bg-white p-10 border-solid border-2 border-gray-300 rounded-3xl">
        <Head>
          <title>E-commerce Next.js + Typescript</title>
        </Head>
        <div className="flex flex-wrap justify-center mt-10 gap-10">
          {productsResponse?.products?.map((product: Product) => {
            return <Card key={product.id} product={product} />
          })}
        </div>
      </div>
    </main>
  )
}
