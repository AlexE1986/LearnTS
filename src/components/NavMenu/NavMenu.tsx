import React, { FC } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

import './NavMenu.scss';

const NavMenu: FC = function () {
   const categories: Set<string> = new Set();
   const goodList = useTypedSelector(store => store.goods.goodList);

   const { filterGoodsByCat } = useActions();

   goodList.forEach((item) => {
      categories.add(item.category);
   });

   const cat = Array.from(categories).sort();

   return (
      <div className='navMenu bgWhite'>
         <div className='navMenu__header'>CATEGORIES</div>
         <div className='navMenu__item' key='all' onClick={() => filterGoodsByCat('')}>SHOW ALL</div>
         {cat.map((item, index) => (
            <div className='navMenu__item' key={index} onClick={() => filterGoodsByCat(item)} >
               {item.toUpperCase()}
            </div>)
         )}
         <div className='navMenu__footer'></div>
      </div>
   );
}

export default NavMenu;