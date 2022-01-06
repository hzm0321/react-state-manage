import React from 'react';
import { Button } from 'antd';
const routerList = [
  {
    key: 'todo-list',
  },
];
const ReactComponent = () => {
  const routerPrefix = '/mobx/react';

  return (
    <div>
      {routerList.map(({ key }) => (
        <Button type="primary" href={`${routerPrefix}/${key}`}>
          {key}
        </Button>
      ))}
    </div>
  );
};

export default ReactComponent;
