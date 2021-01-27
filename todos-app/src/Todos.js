import React from 'react'

export default function Todos(props) {
    const { todos,Delettodos } = props;


    let todoList = todos.length ? (

        todos.map(todo => {

            return (<div className="Container my-1" key={todo.id}>
                <div className="card ">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item text-center text-success" onClick= {() => {Delettodos(todo.id)}}>{todo.Lists}</li>
                
                    </ul>
                 
                </div>
            </div>
            )

        })


    ) : (

            <div className="alert alert-danger container text-center " role="alert">
                You have no todos Please add some!
            </div>
        )


    return (
        <div>
            {todoList}
        </div>
    )
}
