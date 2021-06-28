import React, { FC, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { IGood } from "../../types/goods";

import './Item.scss';

interface ItemProps {
   good: IGood;
}

const Item: FC<ItemProps> = function ({ good }) {
   const [count, setCount] = useState<number>(0);

   const srcImg = good.name.split(' ').join('_');

   const plus = function () {
      if (count < 10) setCount(count + 0.5);
   }

   const minus = function () {
      if (count >= 0.5) setCount(count - 0.5)
      if (count > 0 && count < 0.5) setCount(0);
   }

   const input = (e: any) => {

      const input: HTMLInputElement = e.currentTarget.parentNode.nextSibling;

      input.classList.remove('hidden');
      input.focus();
      let inputCount = 0;

      input.oninput = function () {
         inputCount = +input.value;
         inputCount = (inputCount > 10) ? 10 : inputCount;
         inputCount = (inputCount < 0) ? 0 : inputCount;
      }

      input.onkeydown = function (e: any) {
         if (e.key === 'Enter') input.blur();
      }

      input.onblur = function () {
         if (+inputCount !== 0 && !isNaN(+inputCount)) { setCount(+inputCount.toFixed(2)) }
         input.value = '';
         input.classList.add('hidden');
      }
   }

   const { addToBasket } = useActions();

   const add = function () {
      if (count > 0) {
         addToBasket({ good: good, number: count });
         setCount(0);
      }
   }

   return (
      <div className='item'>
         <div className='item__name center bgWhite'>
            {good.name}
         </div>
         <img src={`/img/${good.category}/${srcImg}.jpg`} className='item__image' alt='' />
         <div className='item__price bgWhite'>{good.price.toFixed(2)}</div>
         <div className='item__buttonsBlock bgWhite'>
            <div className='item__button' onClick={minus}>-</div>
            <div className='item__count' onClick={input}>{count}</div>
            <div className='item__button' onClick={plus}>+</div>
         </div>
         <input className='item__input hidden'></input>
         <div className='item__text'>less 10kg</div>
         <div className='item__toBasket center bgWhite' onClick={add}>TO BASKET</div>
      </div>
   );
}

export default Item;