import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create<any>(
  persist(
    (set) => ({
      items: [],
      totalItems: 0,
      addToCart: (product: any) => {
        set((state: any) => {
          const existingProductIndex = state.items.findIndex(
            (item: any) => item.id === product.id
          );
          if (existingProductIndex !== -1) {
            const updatedItems = [...state.items];
            updatedItems[existingProductIndex].quantity += 1;
            return {
              items: updatedItems,
              totalItems: updatedItems.reduce(
                (total, item) => total + item.quantity,
                0
              ),
            };
          } else {
            return {
              items: [...state.items, { ...product, quantity: 1 }],
              totalItems: state.totalItems + 1,
            };
          }
        });
      },
      removeFromCart: (productId: any) => {
        set((state: any) => ({
          items: state.items.filter((item: any) => item.id !== productId),
          totalItems: state.totalItems - 1,
        }));
      },
      clearCart: () => set({ items: [], totalItems: 0 }),

      getTotalPrice: () => {
        return {
          totalItems: useCartStore
            .getState()
            .items.reduce(
              (totalPrice: any, item: any) =>
                totalPrice + item.price * item.quantity,
              0
            ),
        };
      },
      quantityUpdate: (productId: any, quantity: number) => {
        set((state: any) => {
          const updatedItems = state.items.map((item: any) => {
            if (item.id === productId) {
              return { ...item, quantity };
            }
            return item;
          });
          return {
            items: updatedItems,
            totalItems: state.totalItems,
          };
        });
      },
    }),
    {
      name: "cart-storage",
    }
  )
);

export default useCartStore;
