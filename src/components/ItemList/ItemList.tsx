import React, { FC } from "react";
import { IGood } from "../../types/goods";
import Item from "../Item/Item";

import './ItemList.scss';

interface ItemListProps {
   goodList: IGood[];
}

const ItemList: FC<ItemListProps> = function ({ goodList }) {
   return (
      <div className='itemList'>
         {goodList.map((good) => <Item good={good} key={good.name} />)}
      </div>
   );
}

export default ItemList;