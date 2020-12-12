import React from 'react';
import Todo from '../todo/Todo';
import { AnimatePresence } from 'framer-motion';




function TodoList({todos, setTodos, filteredTodos}) {
    return (
        <div>
            <div className="todo-container">
                <ul
                className="todo-list">
                    <AnimatePresence>
                    {filteredTodos.map(todo=>(
                        <Todo todo={todo} todos={todos} setTodos={setTodos} key={todo.id} id={todo.id} text={todo.text} />
                    ))}
                    </AnimatePresence>
                </ul>
                
            </div>
        </div>
    );
}

export default TodoList;
