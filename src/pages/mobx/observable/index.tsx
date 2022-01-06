import React, { useRef } from 'react';
import { observable, isArrayLike } from 'mobx';

import ForwardRef from './components/forward-ref';
import { Button } from 'antd';

interface Props {}

const Observable: React.FC<Props> = () => {
  const forwardRef = useRef();

  const obList = observable([1, 2, 3]);
  obList.push(4);
  console.log(obList[1]);
  // 判断是否是 mobx 数组或普通数组
  console.log(isArrayLike(obList));
  console.log(isArrayLike([]));
  console.log(isArrayLike(1));

  const obj = observable({ a: 1, b: 2 });
  console.log(obj);
  console.log(obj.a);

  const num = observable.box(1);
  console.log(num);
  console.log(num.get());
  num.set(2);
  console.log(num.get());

  console.log(forwardRef);

  return (
    <div>
      1111
      <ForwardRef ref={forwardRef} />
      <Button
        type="primary"
        onClick={() => {
          console.log(forwardRef.current?.getName());
        }}
      >
        get Name
      </Button>
    </div>
  );
};

export default Observable;
