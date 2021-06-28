import { GoodsAction, GoodsActionTypes } from "../../types/goods";

export function sortGoods(sortType: string): GoodsAction {
   return {
      type: GoodsActionTypes.SORT_GOODS,
      payload: sortType
   }
}

export function filterGoodsByName(name: string): GoodsAction {
   return {
      type: GoodsActionTypes.FILTER_NAME_GOODS,
      payload: name
   }
}

export function filterGoodsByCat(cat: string): GoodsAction {
   return {
      type: GoodsActionTypes.FILTER_CAT_GOODS,
      payload: cat
   }
}