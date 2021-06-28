import { IGoodsState, GoodsAction, GoodsActionTypes } from "../../types/goods"

const initialState: IGoodsState = {
   goodList: [
      {
         category: 'Fruits',
         name: 'Banana',
         price: 69.90,
      },
      {
         category: 'Fruits',
         name: 'Cherry',
         price: 199.90,
      },
      {
         category: 'Fruits',
         name: 'Green Apple',
         price: 99.90,
      },
      {
         category: 'Fruits',
         name: 'Lemon',
         price: 89.90,
      },
      {
         category: 'Fruits',
         name: 'Orange',
         price: 79.90,
      },
      {
         category: 'Fruits',
         name: 'Pear',
         price: 149.90,
      },
      {
         category: 'Fruits',
         name: 'Plum',
         price: 119.90,
      },
      {
         category: 'Fruits',
         name: 'Red Apple',
         price: 109.90,
      },
      {
         category: 'Fruits',
         name: 'Strawberry',
         price: 289.90,
      },
      {
         category: 'Vegetables',
         name: 'Chili',
         price: 349.90,
      },
      {
         category: 'Vegetables',
         name: 'Cucumber',
         price: 64.90,
      },
      {
         category: 'Vegetables',
         name: 'Pea',
         price: 39.90,
      },
      {
         category: 'Vegetables',
         name: 'Pepper',
         price: 179.90,
      },
      {
         category: 'Vegetables',
         name: 'Potato',
         price: 34.90,
      },
   ],
   filterCat: '',
   filterName: '',
   sortBy: 'nameUp'
}

export const goodsReducer = (state = initialState, action: GoodsAction): IGoodsState => {
   const { goodList, filterCat, filterName, sortBy } = state;
   switch (action.type) {
      case GoodsActionTypes.SORT_GOODS:
         switch (action.payload) {
            case 'nameUp':
               goodList.sort((a, b) => a.name > b.name ? 1 : -1);
               return { goodList, filterCat, filterName, sortBy: action.payload }
            case 'nameDown':
               goodList.sort((a, b) => a.name > b.name ? -1 : 1);
               return { goodList, filterCat, filterName, sortBy: action.payload }
            case 'priceUp':
               goodList.sort((a, b) => a.price > b.price ? 1 : -1);
               return { goodList, filterCat, filterName, sortBy: action.payload }
            case 'priceDown':
               goodList.sort((a, b) => a.price > b.price ? -1 : 1);
               return { goodList, filterCat, filterName, sortBy: action.payload }
            default:
               return state
         }
      case GoodsActionTypes.FILTER_NAME_GOODS:
         return { goodList, filterCat, filterName: action.payload.toLowerCase(), sortBy }
      case GoodsActionTypes.FILTER_CAT_GOODS:
         return { goodList, filterCat: action.payload.toLowerCase(), filterName, sortBy }
      default:
         return state
   }
}

