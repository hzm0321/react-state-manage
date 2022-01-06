import React, { forwardRef, useImperativeHandle } from 'react';
import { useLocalStore, useObserver } from 'mobx-react';
import { Button } from 'antd';

const ForwardRef = forwardRef(({}, ref) => {
  const store = useLocalStore(() => ({
    count: 0,
  }));

  useImperativeHandle(ref, () => {
    return {
      getName: () => {
        return 'hzm';
      },
    };
  });

  return useObserver(() => (
    <div>
      {store.count}
      <Button
        onClick={() => {
          store.count++;
        }}
      >
        change ref count
      </Button>
    </div>
  ));
});

export default ForwardRef;
