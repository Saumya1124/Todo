import { Fragment, useRef } from "react";
import classes from './AddTodo.module.css';

function AddTodo(props){

    const titleRef = useRef()
    const timeRef = useRef()

    function submitHandler (e) {
        e.preventDefault()
        const title = titleRef.current.value;
        const time = timeRef.current.value;
        const newTodo = {
            // id : Date.now,
            title : title,
            time : time,
            isCompleted : false,
        }
        console.log(newTodo)
        props.getTodo(newTodo)

    }


    return (
        <Fragment>
             <div className="d-flex justify-content-center">
                 <form className={`${classes.form} col-lg-8`} onSubmit={submitHandler}>
                    <input type="Text" placeholder="Title" className="col-3" ref={titleRef}></input>
                    <input type="text" placeholder="Time" className="col-3" ref={timeRef}></input>
                    <button className="col-3">Add Task</button>
                 </form>
             </div>
        </Fragment>
    )
}
export default AddTodo