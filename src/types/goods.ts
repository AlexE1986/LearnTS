export interface IGoodsState {
   goodList: IGood[];
   sortBy: string;
   filterName: string;
   filterCat: string;
}

export enum GoodsActionTypes {
   SORT_GOODS = 'SORT_GOODS',
   FILTER_CAT_GOODS = 'FILTER_CAT_GOODS',
   FILTER_NAME_GOODS = 'FILTER_NAME_GOODS'
}

interface SortGoodsAction {
   type: GoodsActionTypes.SORT_GOODS;
   payload: string;
}

interface FilterCatGoodsAction {
   type: GoodsActionTypes.FILTER_CAT_GOODS;
   payload: string;
}

interface FilterNameGoodsAction {
   type: GoodsActionTypes.FILTER_NAME_GOODS;
   payload: string;
}

export type GoodsAction = SortGoodsAction | FilterCatGoodsAction | FilterNameGoodsAction;

export interface IGood {
   category: string,
   name: string,
   price: number,
}
