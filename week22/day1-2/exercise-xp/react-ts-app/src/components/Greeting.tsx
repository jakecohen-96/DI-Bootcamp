import React from "react";

interface GreetingProps {
    name: string;
    messageCount: number;
}

const Greeting: React.FC<GreetingProps> = ({ name, messageCount }) => {
    return (
        <div>
            <h1>Hello {name}!</h1>
            <p>message count: {messageCount}.</p>
        </div>
    );
};

export default Greeting;