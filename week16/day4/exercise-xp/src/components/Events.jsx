const Events = () => {
    const handleClick = () => {
        console.log('I was clicked');
        
    };

    return (
        <div>
            <button onClick={handleClick}>please click me</button>
        </div>
    );
};


export default Events;