import { IGood } from "./goods";

export interface IBasketItem {
   good: IGood;
   number: number;
}

export enum BasketActionTypes {
   ADD_TO_BASKET = 'ADD_TO_BASKET',
   REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET',
   CLEAR_BASKET = 'CLEAR_BASKET'
}

interface AddToBasket {
   type: BasketActionTypes.ADD_TO_BASKET;
   payload: IBasketItem;
}

interface RemoveFromBasket {
   type: BasketActionTypes.REMOVE_FROM_BASKET;
   payload: IGood;
}

interface ClearBasket {
   type: BasketActionTypes.CLEAR_BASKET;
}

export type BasketAction = AddToBasket | RemoveFromBasket | ClearBasket;