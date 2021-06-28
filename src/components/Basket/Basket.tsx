import React, { FC } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IBasketItem } from '../../types/basket';

import './Basket.scss';

const Basket: FC = () => {
   const basket = useTypedSelector(state => state.basket);

   const { clearBasket, removeFromBasket } = useActions();

   let basketList, basketTotal, basketClear;

   if (basket.length === 0) {
      basketList = <div className='basket__empty'>Basket is empty</div>;
      basketTotal = basketClear = null;
   } else {
      basketList = basket.map((item: IBasketItem, index: number) => <div key={item.good.name} className='basket__item'>
         <div className='basket__removeBtn' onClick={() => removeFromBasket(item.good)}>x</div>
         <div className='basket__itemName'>{index + 1}. {item.good.name}</div>
         <div className='basket__itemTotal'>{+item.number} kg x {item.good.price} ₽/kg = {(item.good.price * item.number).toFixed(2)} ₽</div>
      </div>);
      basketTotal = <div className='basket__total'>Total price: {(basket.reduce((sum, current) => sum + +(current.good.price * current.number), 0)).toFixed(2)} ₽</div>
      basketClear = <div className='basket__clearBtn center' onClick={() => clearBasket()}>CLEAR</div>

   }


   return (
      <div className='basket bgWhite'>
         <div className='basket__header'>INTO BASKET:</div>
         {basketList}
         {basketTotal}
         {basketClear}
      </div>
   );
}

export default Basket;