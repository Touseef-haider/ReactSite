import React, { Component } from 'react';

class BookList extends Component {
    state = {
        Todo:[],
        count:0
    }
    handleAdd=()=>{
        let todo = [...this.state.Todo];
        const data={
            id:this.state.count++,
            item:this.DemoInput.value
        }
        todo.push(data);
        this.setState({
            Todo:todo
        })
        this.DemoInput.value='';
        document.querySelector('#input').focus();
    }
    componentDidMount=()=>{
        document.querySelector('#input').focus();
    }
    handleChange=(id)=>{
        let todo = [...this.state.Todo];
        let updatedItem = todo.filter(item=>item.id===id)
        let p = prompt('Update the item',updatedItem[0].item)
        todo[id].item=p;
        this.setState({
            Todo:todo
        })
    }
    handleDelete=(id)=>{
        let todo = [...this.state.Todo];
        todo = todo.filter(item=>item.id!==id)
        this.setState({
            Todo:todo
        })
    }
    render() { 
        return (
            <div>
                <input type="text" id='input' ref={input=>this.DemoInput=input}/>
                <button onClick={this.handleAdd}>Add</button>
                <div>
                    {this.state.Todo.map(item=>(
                        <div key={item.id}  >
                            <span>{item.item}</span><button onClick={()=>this.handleChange(item.id)}>Update</button>
                            <button onClick={()=>this.handleDelete(item.id)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>    
        );
    }
}
 
export default BookList;