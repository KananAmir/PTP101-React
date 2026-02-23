import { createContext } from "react";
import type { Movie } from "../types/movie";
import type { Basket } from "./BasketProvider";

type BasketContextType = {
  basket: Basket[];
  addToBasket: (movie: Movie) => void;
  removeFromBasket: (id: string) => void;
  clearBasket: () => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
};


export const BasketContext = createContext<BasketContextType | null>(null)