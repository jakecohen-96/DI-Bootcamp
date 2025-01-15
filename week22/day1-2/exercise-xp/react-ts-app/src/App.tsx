import React from "react";
import UserCard from "./components/UserCard";
import UserList from "./components/UserList";

const App: React.FC = () => {
    return (
        <div>
            <UserCard name="Chris" age={30} role="tester" />
            <UserCard name="Jenny" role="designer" />
            <UserCard age={25} />
            <UserCard />
            <UserList />
        </div>
    );
};

export default App;