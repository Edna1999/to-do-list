import React, { useState } from 'react';
import TodoListForm from './TodoListForm';
import Todo from './Todo';

function TodoList() {
    const [list, setList] = useState([]);

    const addListItem = (item) => {
        console.log(item);

        if(!item.text){
            return;
        }

        const newList = [item, ...list];

        setList(newList);
    };

    const completeListItem = (id) => {
        let updateList = list.map((item) => {
            if(item.id === id) {
                item.isComplete = !item.isComplete;
            }
            return item;
        });

        setList(updateList);
    };

    const removeListItem = (id) => {
        const updateList = [...list].filter((item) => item.id !== id);

        setList(updateList);
    };

    const editListItem = (itemId, newValue) => {
        if(!newValue.text) {
            return;
        }

        setList((prev) => prev.map((item) => (item.id === itemId ? newValue : item))
        );

    };

    return (
        <div>
            <h1>TODO LIST</h1>
            <TodoListForm onSubmit={addListItem} />
            <Todo
            list={list}
            completeListItem={completeListItem}
            removeListItem={removeListItem}
            editListItem={editListItem}
            />
        </div>
    );

}

export default TodoList;