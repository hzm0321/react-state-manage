import React from 'react';
import { action, autorun, observable, runInAction } from 'mobx';

const Action = () => {
  const obj = observable({ a: 1, b: 2 });

  autorun(() => {
    console.log('run', obj.a + obj.b);
  });

  runInAction(() => {
    obj.a = 2;
    obj.a = 3;
  });

  const batch = action(() => {
    obj.a = 2;
    obj.a = 3;
  });

  // batch();

  return <div>Action</div>;
};

export default Action;
