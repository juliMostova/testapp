import React  from "react";
import TodoList from "./Todo/TodoList";






function App() {

  const todos = [
    {id :1,completed:false,title:'Read the book'},
    {id :2,completed:false,title:'Pick a project'},
    {id :3,completed:false,title:'Go to the GYM'},
    {id :4,completed:false,title:'Learn JS'},
    {id :5,completed:false,title:'Do not forget to eat'}
  ]


  return (
    <div className="wrapper" >
      <div className='inner'>
        <h1>TodoList</h1>
        </div> 
        <div>
          <input className='newTodo'  type='text '></input>
          </div>
      <h2> You have pending 10 items</h2>
      <TodoList todos={todos}></TodoList>
      
    </div>
  );

  }





export default App
