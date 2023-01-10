import React, { useState } from 'react';

function TodoListForm(props) {
    const [input, setInput] = useState('');
  
    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.random(Math.floor() * 1000),
            text: input
        });

        setInput('');
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return !props.edit ? (
        <div>
            <form className='todo-list-form'
            onSubmit={handleSubmit}>
                <input
                type='text'
                placeholder='Add to your todo list'
                value={input}
                name='text'
                className='list-input'
                onChange={handleChange}
                />
                <button 
                className='list-button'>Add list item</button>
            </form>
        </div>
    ) : (
       <div>
        
        <form className='todo-list-form'
            onSubmit={handleSubmit}>
                <input
                type='text'
                placeholder={props.edit.value}
                value={input}
                name='text'
                className='list-input'
                onChange={handleChange}
                />
                <button className='list-button'>Update</button>
            </form>
       </div>
    );
}

    export default TodoListForm;
