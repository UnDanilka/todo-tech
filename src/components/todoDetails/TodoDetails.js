import React from 'react';

function TodoDetails({match}) {
    
    return (
        <div className='todo-details'>
            <h1>Some additional info about TODO with ID: {match.params.id}</h1>
        </div>
    );
}

export default TodoDetails; 