import React, { FC } from 'react';
import { useActions } from '../../hooks/useActions';

import './SortBar.scss';

const SortBar: FC = function () {

   const { sortGoods } = useActions();

   const sort = function (e: any) {
      if (!(e.target.tagName === 'BUTTON')) return;

      const div: HTMLDivElement = e.currentTarget;
      div.querySelector('.bgWhite')?.classList.remove('bgWhite');
      e.target.classList.add('bgWhite');
      setTimeout(() => sortGoods(e.target.dataset.type), 500);
   }

   return (
      <div className='sortBar' onClick={sort}>
         <button data-type='nameUp' className='sortBar__button bgWhite'>name ↑</button>
         <button data-type='nameDown' className='sortBar__button'>name ↓</button>
         <button data-type='priceUp' className='sortBar__button'>price ↑</button>
         <button data-type='priceDown' className='sortBar__button'>price ↓</button>
      </div>
   );
}

export default SortBar;