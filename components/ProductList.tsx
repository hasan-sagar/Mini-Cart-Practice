"use client";
import useCartStore from "@/store/cartStore";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

function ProductList() {
  const [productData, setProductsData] = useState([]);
  const { addToCart } = useCartStore() as any;

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await axios.get("https://fakestoreapi.com/products");
      setProductsData(data.data);
    };
    fetchProduct();
  }, []);
  return (
    <div>
      <section>
        <div className="max-w-screen-2xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Product Collection
            </h2>
          </header>
          <ul className="grid gap-4 gap-y-10 mt-8 sm:grid-cols-2 lg:grid-cols-4">
            {productData ? (
              productData.map((product: any) => (
                <li key={product.id}>
                  <div
                    key={product.id}
                    className="block overflow-hidden group rounded-xl border-dashed border-black border px-2 py-2"
                  >
                    <img
                      src={product.image}
                      alt=""
                      className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />
                    <div className="relative pt-3 bg-white">
                      <h3 className="text-base font-medium  text-teal-600 group-hover:underline group-hover:underline-offset-4">
                        <Link href={`/products/${product.id}`}>
                          {product.title}
                        </Link>
                      </h3>

                      <p className="mt-2">
                        <span className="tracking-wider text-gray-900 font-semibold">
                          ${product.price}
                        </span>
                      </p>
                      <button
                        onClick={() => addToCart(product)}
                        className="inline-flex text-white bg-teal-700 border-0 py-1 px-4 focus:outline-none hover:bg-teal-900 rounded text-lg mt-2"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <>
                <p>No Data Found</p>
              </>
            )}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default ProductList;
