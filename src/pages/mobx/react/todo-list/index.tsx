import React from 'react';
import { Button, Input } from 'antd';
import { useLocalStore, observer } from 'mobx-react';

import ListItem, { InputType } from './components/todo-item';

const TodoList = () => {
  const listStore = useLocalStore<{
    inputValue: string;
    todoList: InputType[];
    handleRemove: (value: InputType) => void;
  }>(() => ({
    inputValue: '',
    todoList: [],
    handleRemove(value) {
      console.log(listStore.todoList);
      listStore.todoList.remove(value);
    },
  }));

  return (
    <div>
      <div>
        <Input
          style={{ width: 200 }}
          value={listStore.inputValue}
          onChange={(e) => {
            listStore.inputValue = e.target.value;
          }}
        />
        <Button
          type="primary"
          onClick={() => {
            const item = {
              id: parseInt(String(Math.random() * 10000)),
              text: listStore.inputValue,
              isFinished: false,
            };
            listStore.todoList.push(item);
            listStore.inputValue = '';
          }}
        >
          添加
        </Button>
      </div>
      {listStore.todoList.map((value) => {
        return (
          <ListItem
            key={value.id}
            value={value}
            handleRemove={() => listStore.handleRemove(value)}
          />
        );
      })}
      <div>
        已完成的数量：
        {
          listStore.todoList.filter((value) => {
            return value.isFinished;
          }).length
        }
      </div>
    </div>
  );
};

export default observer(TodoList);
