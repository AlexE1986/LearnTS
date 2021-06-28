import React, { FC } from "react";
import SortBar from "../SortBar/SortBar";
import SearchBar from "../SearchBar/SearchBar";

import './TopMenu.scss';

const TopMenu: FC = function () {
   return (
      <div className='topMenu'>
         <SortBar />
         <SearchBar />
      </div>
   );
}

export default TopMenu;