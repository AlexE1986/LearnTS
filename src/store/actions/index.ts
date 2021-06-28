import * as GoodsActions from './goodsActions';
import * as BasketActions from './basketActions';

const Actions = { ...GoodsActions, ...BasketActions };

export default Actions;