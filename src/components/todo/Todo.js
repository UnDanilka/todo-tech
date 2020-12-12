import React from 'react';
import {Link} from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion';

const animateDiv = {
    initial: {
        x: '-100vh'
    },
    animate: {
        x: 0,
        transition: {
            type: 'spring',
            duration: 1,
            mass: 1
        }
    },
    exit:{
        x:-1000,
        opacity: 0,
        transition: {
            duration:1
        }
    }
}

function Todo({
    text,
    todos,
    setTodos,
    todo,
    id
}) {

    const deleteHandler = () => {
        setTodos(todos.filter(elem => elem.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map(elem => {
            if (elem.id === todo.id) {
                return {
                    ...elem,
                    completed: !elem.completed
                }
            }
            return elem
        }))
    }


    return (
            <motion.div 
                variants={animateDiv}
                initial='initial'
                animate='animate'
                exit='exit'
                className='todo'>
                <li className={
                    `todo-item ${
                        todo.completed ? 'completed' : ''
                    }`
                }>
                    {text}</li>
                <button onClick={completeHandler}
                    className='complete-btn hover'>
                    <i className='fas fa-check'></i>
                </button>
                <button onClick={deleteHandler}
                    className='trash-btn hover'>
                    <i className='fas fa-trash'></i>
                </button>
                <Link to={
                    `/${id}`
                }>
                    <button className='info-btn hover'>
                        <i className="fa fa-info"></i>
                    </button>
                </Link>
            </motion.div>
            
    );
}

export default Todo;
