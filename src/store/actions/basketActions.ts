import { BasketAction, BasketActionTypes, IBasketItem } from "../../types/basket"
import { IGood } from "../../types/goods"

export function addToBasket(item: IBasketItem): BasketAction {
   return {
      type: BasketActionTypes.ADD_TO_BASKET,
      payload: item
   }
}

export function removeFromBasket(good: IGood): BasketAction {
   return {
      type: BasketActionTypes.REMOVE_FROM_BASKET,
      payload: good
   }
}

export function clearBasket(): BasketAction {
   return {
      type: BasketActionTypes.CLEAR_BASKET
   }
}