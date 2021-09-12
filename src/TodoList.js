import React from "react";
import moment from "moment";

class TodoList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todoList:[],
        }
    }

    onSubmit() {
        const currentTodoList = this.state.todoList;
        currentTodoList.push(this.state.input);
        this.setState({ todoList: currentTodoList });
}

    render() {
        return (
            <div>
                <h2>Todo List</h2>
                <label> Create New TodoList</label>
                <br/>
                <input type="text" onChange={(event) => this.setState({input: event.target.value})} ></input>
                <button onClick={()=> this.onSubmit()} >Submit</button>
                <br/>
                {this.state.todoList.map(todoList => (
                    <p>{ todoList}</p>
                ))}

                <br />
                <p>{moment().format('MMMM Do YYYY, h:mm:ss a') }</p>
                </div>
            )
        }
    
    

}

export default TodoList;