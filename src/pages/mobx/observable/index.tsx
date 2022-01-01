import React from 'react';
import { observable, isArrayLike } from 'mobx';

interface Props {}

const Observable: React.FC<Props> = () => {
  const obList = observable([1, 2, 3]);
  console.log(obList);

  // 判断是否是 mobx 数组

  return (
    <div>
      1111
    </div>
  );
};

export default Observable;
