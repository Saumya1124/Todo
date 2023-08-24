import { Fragment } from "react";
import { Table } from "react-bootstrap";


function Todos (props) {
    return (
        <Fragment>
        <div>
          <br />        
          <h3 className="text-center">Today's Tasks</h3>
          <br />
          <br />
          <div className="col-12 d-flex justify-content-center align-items-center">
              <div className="col-lg-8 col-md-9 col-sm-10 col-10">
                <Table striped bordered hover>
                    <thead>
                      <tr>
                        
                        <th>Status</th>
                        <th>Title</th>
                        <th>Time</th>
                        <th>Update</th>
                        
                      </tr>
                    </thead>
                    <tbody>                    
                         {props.todos.map( (todo) =>
                          <tr key={todo.id}>
                            
                            <td><span style={{
                                          display: "inline-block",
                                          width: "10px",
                                          height: "10px",
                                          borderRadius: "50%",
                                          // backgroundColor: "blue",
                                          marginRight: "5px",
                                          border : '1px solid black',
                                      }}></span>
                            </td>
                            <td>{todo.title}</td>
                            <td>{todo.time}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                         </tr>                           
                         )}                    
                    </tbody>
                </Table>
              
          </div>
        </div>
      </div>
    </Fragment>
    )
}
export default Todos