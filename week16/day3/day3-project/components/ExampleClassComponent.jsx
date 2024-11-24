import React from "react";

class ExampleClassComponent extends React.Component{
    fetchUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(data => {
            console.log(data);
            
        })
        .catch(e => {
            console.log(e);
            
        })
    } 

    render(){
        return(
            <>
                <h2>Example of a class component</h2>
                <button onClick={this.fetchUsers}>Get Users</button>
            </>
        )
    } 
};

export default ExampleClassComponent;