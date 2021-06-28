import React, { FC } from "react";

import './CatHead.scss';

interface CatHeadProps {
   cat: string;
}

const CatHead: FC<CatHeadProps> = function ({ cat }) {
   return (
      <div className='category'>
         {cat}
      </div>
   );
}

export default CatHead;