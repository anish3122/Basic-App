import {useState, useEffect} from 'react';
import axios from 'axios';

function Todosfile1(){
    let [todos, setUsers] = useState([])

    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then(res => setUsers(res.data))
    }, [])
    console.log(todos);
    return(
        <div className = 'container'>
            <h1 className = 'text-center mt-5'>Table</h1>
            <table className = 'table table-striped'>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>ID</th>
                        <th>TITLE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(element =>
                            <tr key={element.id}>
                                <td>{element.userId}</td>
                                <td>{element.id}</td>
                                <td>{element.title}</td>
                            </tr>)
                    }
                </tbody>
            </table>
            <div>
                <h1 className = 'text-center mt-5'>Cards</h1>
                <div className = 'row row-cols-sm-2 row-cols-sm-2'>
                    {
                        todos.map(element=>
                            <div className = 'col mt-3' key={element.id}>
                                <div className = 'card p-3 mt -3 text-center h-100 justify-content-center'>
                                    <h3>{element.id} .{element.title}</h3>
                                    <h5 className = 'text-secondary'>TITLE: {element.title}</h5>

                                </div>

                            </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Todosfile1;