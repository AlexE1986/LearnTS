import { combineReducers } from "redux";
import { basketReducer } from "./basketReducers";
import { goodsReducer } from "./goodsReducer";

export const rootReducer = combineReducers({
   goods: goodsReducer,
   basket: basketReducer
});

export type RootState = ReturnType<typeof rootReducer>;

