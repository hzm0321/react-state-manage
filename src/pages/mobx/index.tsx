import React from 'react';
import {PageHeader, Button} from "antd";
import {RouteComponentProps} from 'react-router';

interface Props extends RouteComponentProps {
}

const routerList = [
  {
    key: 'observable'
  }
]

const Mobx: React.FC<Props> = ({history}) => {
  const routerPrefix = '/mobx';


  return (
    <div>
      <PageHeader
        onBack={() => history.goBack()}
        title="返回"
        subTitle="mobx"
      />
      {routerList.map(({key}) => <Button type="primary" href={`${routerPrefix}/${key}`}>{key}</Button>)}
    </div>
  );
};

export default Mobx;
