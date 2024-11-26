const Parent = (porps) => {
    console.log(props);

    if(props.auth === 'admin') return porps.children

    return <h2>NOOOO</h2>
    
    return props.children

};

export default Parent;