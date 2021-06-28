import React, { FC } from 'react';
import NavMenu from '../NavMenu/NavMenu';
import Basket from '../Basket/Basket';

import './Menu.scss';

const Menu: FC = function () {
   return (
      <div className='menu'>
         <NavMenu />
         <Basket />
      </div>
   );
}

export default Menu;