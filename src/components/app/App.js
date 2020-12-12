import React, {useState, useEffect} from 'react';
import './App.css';
import Form from '../form/Form';
import TodoList from '../todoList/TodoList';
import TodoDetails from '../todoDetails/TodoDetails';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


function App() {

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(()=>{
    getData();
    // getLocalTodos();
  }, [])
  
  useEffect(()=>{
    filterHandler();
    // saveLocalTodos();
  }, [todos, status])

  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo=> todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo=> todo.completed !== true));
        break;
      default:
        setFilteredTodos(todos);
        break;  
    }
  }

  //Работа с localStorage

  // const saveLocalTodos = () =>{
  //     localStorage.setItem('todos', JSON.stringify(todos))
  // }

  // const getLocalTodos = async () =>{
  //   if(localStorage.getItem('todos') === null){
  //     localStorage.setItem('todos', JSON.stringify([]))
  //   }else{
  //    let todoLocal = JSON.parse(localStorage.getItem('todos'))
  //    setTodos(todoLocal)
  //   } 
  // };

  const getData =async () => {
    await fetch('http://localhost:5000/todos')
    .then(data=>data.json())
    .then(res=>setTodos(res))
  }
  return (
    <Router>
    <div className="App">
      <header>
      <h1>Dan's TODO list</h1>
        <Link to='/'><button className='btn-home hover' >Home</button></Link>
      </header>
      <Route path='/' exact>
      <Form  setStatus={setStatus}  todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
      <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/>
      </Route>
      <Route path='/:id' component={TodoDetails} />
    </div> 
    </Router>
  );
}

export default App;

