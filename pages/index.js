import React , { Fragment, useState } from "react";
import AddTodo from "../components/AddTodo";
import Todos from "../components/todos";


const TODOS= [
  {id : 1 , title : 'Read Book' , time : '2hrs'},
  {id : 2 , title : 'Make Project' , time : '4hrs'},
  {id : 3 , title : 'Practise DSA' , time : '1hr' }
]


function HomePage (){

  function getTodo(todo){
    
    console.log(todo)
  
  }
  

  return (
    <Fragment>
      <Todos todos = {TODOS}></Todos>
      <AddTodo getTodo={getTodo}></AddTodo>
    </Fragment>
      
  )
}


export default HomePage