"use client";
import useCartStore from "@/store/cartStore";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect } from "react";

function page() {
  const { items, getTotalPrice, removeFromCart, quantityUpdate, clearCart } =
    useCartStore() as any;

  useEffect(() => {
    if (items.length === 0) {
      return clearCart();
    }
  }, []);

  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <header className="text-center">
              <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                Your Cart
              </h1>
              <p
                onClick={() => clearCart()}
                className="text-red-500 cursor-pointer"
              >
                Clear my cart
              </p>
            </header>

            <div className="mt-8">
              {items.map((item: any) => (
                <>
                  <div className="flex items-center gap-10 mt-5" key={item.id}>
                    <Image
                      priority={true}
                      unoptimized
                      width={20}
                      height={20}
                      src={item.image}
                      alt=""
                      className="h-28 w-28 rounded object-cover"
                    />

                    <h1 className="text-base text-gray-900 font-medium">
                      {item.title}
                    </h1>

                    <div className="flex flex-1 items-center justify-end gap-2">
                      <form>
                        <label htmlFor="Line1Qty" className="sr-only">
                          Quantity
                        </label>
                        <button className="text-gray-600 transition hover:text-red-600 text-end">
                          <Image
                            onClick={() => removeFromCart(item.id)}
                            src="/icon/delete.svg"
                            alt=""
                            width={25}
                            height={25}
                          />
                        </button>
                        <input
                          onChange={(event: any) =>
                            quantityUpdate(item.id, event.target.value)
                          }
                          type="number"
                          min="1"
                          defaultValue={item.quantity}
                          id="Line1Qty"
                          className="h-10 w-14 rounded border-gray-200 bg-gray-50  text-center text-xs text-gray-600"
                        />
                      </form>
                    </div>
                  </div>
                </>
              ))}

              <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                <div className="w-screen max-w-lg space-y-4">
                  <dl className="space-y-0.5 text-sm text-gray-700">
                    <div className="flex justify-between text-base">
                      <dt>Subtotal</dt>
                      <dd>£250</dd>
                    </div>

                    <div className="flex justify-between text-base">
                      <dt>VAT</dt>
                      <dd>£25</dd>
                    </div>

                    <div className="flex justify-between text-base">
                      <dt>Discount</dt>
                      <dd>-£20</dd>
                    </div>

                    <div className="flex justify-between text-lg font-medium">
                      <dt>Total</dt>
                      <dd>{getTotalPrice().totalItems}</dd>
                    </div>
                  </dl>

                  <div className="flex justify-end">
                    <button className="inline-flex text-white bg-teal-700 border-0 py-2 px-6 focus:outline-none hover:bg-teal-900 rounded text-lg">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default dynamic(() => Promise.resolve(page), {
  ssr: false,
});
