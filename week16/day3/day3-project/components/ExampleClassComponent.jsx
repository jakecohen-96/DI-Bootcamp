import React from "react";

class ExampleClassComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            text: "please click button", // Fixed typo in the default text
        };
    }

    fetchUsers = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                this.setState({ users: data, text: "changed!" });
            })
            .catch((e) => {
                console.log(e);
            });
    };

    render() {
        return (
            <>
                <h2>Example of a class component</h2>
                <h2>{this.state.text}</h2> {/* Corrected the reference */}
                <button onClick={this.fetchUsers}>Get Users</button>
                {this.state.users.map((item, index) => {
                    return <div key={index}>{item.name}</div>;
                })}
            </>
        );
    }
}

export default ExampleClassComponent;