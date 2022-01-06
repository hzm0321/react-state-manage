import React from 'react';
import { Checkbox } from 'antd';
import { observer } from 'mobx-react';
import { DeleteOutlined } from '@ant-design/icons';
interface Props {
  value: InputType;
  handleRemove: () => void;
}

export type InputType = {
  id: number;
  text: string;
  isFinished: boolean;
};

const TodoItem: React.FC<Props> = ({ value, handleRemove }) => {
  return (
    <div>
      <Checkbox
        checked={value.isFinished}
        onChange={(e) => {
          value.isFinished = e.target.checked;
        }}
      />
      {value.text}
      <a
        onClick={() => {
          handleRemove();
        }}
      >
        {' '}
        <DeleteOutlined />
      </a>
    </div>
  );
};

export default observer(TodoItem);
