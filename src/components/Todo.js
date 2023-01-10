import React, { useState } from 'react';
import TodoListForm from './TodoListForm';

function Todo(props) {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    });

    const submitUpdate = (value) => {
        props.editListItem(edit.id, value);
        setEdit({id: null, value:''});
    };

    if(edit.id) {
        return <TodoListForm edit={edit} onSubmit={submitUpdate} />;
    };

    return props.list.map((item, i) => (
        <div
        className='list-row'
        key={i}
        >
            <div key={item.id} onClick={() => props.completeListItem(item.id)}>
                {item.text}
            </div>
            <div className='icons'>
             {console.log(item)}
             <p onClick={() => setEdit({id:item.id, value: item.text})}> ✏️ </p>
             <p onClick={() => props.removeListItem(item.id)}> 🗑️</p>
            </div>
        </div>
    ));
};

export default Todo;