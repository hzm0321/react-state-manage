import React, { useMemo } from 'react';
import {
  autorun,
  computed,
  IComputedValue,
  observable,
  reaction,
  when,
} from 'mobx';
import { observer } from 'mobx-react-lite';
import { Button } from 'antd';

const Computed = () => {
  const store = useMemo(() => observable({ count: 0 }), []);
  const obj = observable({ a: 1, b: 2 });

  const foo: IComputedValue<number> = computed(() => {
    return obj.a + obj.b;
  });

  // 监听 foo 值变化
  foo.observe((change) => {
    console.log(change);
  });

  autorun(() => {
    console.log('run', obj.a + obj.b);
  });

  obj.a = 3;

  when(
    () => {
      return obj.a === 3;
    },
    () => {
      console.log('obj.a === 3');
    },
  );

  reaction(
    () => [obj.a, obj.b],
    (data) => {
      console.log('reaction', data);
    },
  );
  obj.a = 5;

  console.log(foo);

  return (
    <div>
      Computed
      {store.count}
      <div>
        <Button
          type="primary"
          onClick={() => {
            store.count = store.count + 1;
          }}
        >
          change foo
        </Button>
      </div>
    </div>
  );
};

export default observer(Computed);
