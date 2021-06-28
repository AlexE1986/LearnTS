import { BasketAction, BasketActionTypes, IBasketItem } from "../../types/basket";


const initialState: IBasketItem[] = [];

export const basketReducer = (state = initialState, action: BasketAction) => {
   switch (action.type) {
      case BasketActionTypes.ADD_TO_BASKET:
         const goods = new Set();
         state.forEach((item) => goods.add(item.good.name));

         const newState = [...state];
         if (!goods.has(action.payload.good.name)) {
            return [...state, action.payload].sort((a, b) => a.good.name > b.good.name ? 1 : -1);
         } else {
            newState.forEach((item) => {
               if (item.good.name === action.payload.good.name) {
                  item.number += action.payload.number
               }
            })
         }
         return newState;

      case BasketActionTypes.REMOVE_FROM_BASKET:
         return [...state].filter((item => item.good.name !== action.payload.name))

      case BasketActionTypes.CLEAR_BASKET:
         return initialState;
      default:
         return state;
   }
}