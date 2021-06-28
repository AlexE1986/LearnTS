import React, { FC } from "react";
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IGood } from "../../types/goods";


import CatHead from '../CatHead/CatHead';
import ItemList from '../ItemList/ItemList';

import './Body.scss';

const Body: FC = function () {
   const goodStore = useTypedSelector(store => store.goods);

   let cat: string = goodStore.filterCat;
   let filterName: string = goodStore.filterName;

   const goods: IGood[] = goodStore.goodList.filter((good) => good.category.toLowerCase().includes(cat) && good.name.toLowerCase().includes(filterName));

   cat = cat === '' ? 'ALL CATEGORIES' : cat;

   return (
      <div className='body'>
         <CatHead cat={cat.toUpperCase()} />
         <ItemList goodList={goods} />
      </div>
   );
}

export default Body;