import React , { Fragment, useState } from "react";
import AddTodo from "../components/AddTodo";
import Todos from "../components/todos";
import { MongoClient } from "mongodb";


const TODOS= [
  {id : 1 , title : 'Read Book' , time : '2hrs'},
  {id : 2 , title : 'Make Project' , time : '4hrs'},
  {id : 3 , title : 'Practise DSA' , time : '1hr' }
]


function HomePage (props){

  async function getTodo(todo){

    const res = await fetch('/api/postTodo',{
      method: 'POST',
      body : JSON.stringify(todo),
      headers : {
        'Content-type' : 'application/json'
      }
    })

    const data = await res.json()
    console.log(data)
  
  }
  

  return (

    <Fragment>
      <Todos todos = {props.todoData}></Todos>
      <AddTodo getTodo={getTodo}></AddTodo>
    </Fragment>
      
  )
}

export async function getStaticProps() {

  const client = await MongoClient.connect('mongodb+srv://Saumya_24:Saumya_123@cluster0.6o5hkxs.mongodb.net/?retryWrites=true&w=majority');
  const db = client.db();

  const meetupsCollection = db.collection('Todo')
  const data = await meetupsCollection.find().toArray();
  console.log(data)
  client.close();
  

  return {
    props: {
      todoData: data.reverse().map((todo) => ({
        title: todo.title,
        isCompleted: todo.isCompleted,
        id: todo._id.toString(),
        time : todo.time
      })),
    },
    revalidate: 1,
  };
}


export default HomePage