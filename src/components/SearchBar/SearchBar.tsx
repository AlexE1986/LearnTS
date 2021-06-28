import React, { FC, useRef } from 'react';
import { useActions } from '../../hooks/useActions';

import './SearchBar.scss';

const SearchBar: FC = function () {
   const input: any = useRef('');
   const { filterGoodsByName } = useActions();

   const search = function (e: any) {
      const clearBtn = document.querySelector('[class*="searchBar__clear"]');
      filterGoodsByName(input.current.value);
      clearBtn?.classList.remove('hidden');

      if (input.current.value === '') clearBtn?.classList.add('hidden');
   }

   const clear = function (e: any): void {
      filterGoodsByName('');
      e.target.classList.add('hidden');
      input.current.value = '';
   }

   return (
      <div className='searchBar'>
         <input type='search' className='searchBar__input' ref={input} onInput={() => setTimeout(search, 500)} autoComplete='off' placeholder='найти...' />
         <button className='searchBar__clear bgWhite hidden' onClick={clear}>X</button>
         <i className='fa fa-search searchBar__icon bgWhite' />
      </div>
   );
}

export default SearchBar;