"use client";

import useCartStore from "@/store/cartStore";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

function Topbar() {
  const { totalItems } = useCartStore() as any;

  // const { clearCart } = useCartStore() as any;

  // useEffect(() => {
  //   return clearCart;
  // }, []);

  return (
    <div>
      <header className="bg-white">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link className="block text-teal-600" href="/">
                <span className="sr-only">Home</span>
                <h1 className="font-semibold text-2xl">Shop Cart</h1>
              </Link>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link
                      className="text-gray-700 font-medium transition hover:text-gray-500/75"
                      href="/products"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/cart"
                    >
                      <div className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg">
                        <Image
                          src="/icon/cart.svg"
                          alt=""
                          width={20}
                          height={20}
                        />
                        <p className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500  rounded-full -top-1 -right-0">
                          {/* {totalItems} */}
                        </p>
                      </div>

                      {/* <div className="relative pb-4 pt-1">
                        <div className="t-0 absolute left-0">
                          <p className="flex h-2 w-2 items-center justify-center rounded-full bg-teal-600 p-2 text-xs text-white">
                            3
                          </p>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="file: mt-4 h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                          />
                        </svg>
                      </div> */}
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Topbar;
