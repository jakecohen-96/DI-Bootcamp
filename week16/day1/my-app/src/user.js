import './css/user.css'

const User = ({ name, username, email, id }) => {
    return (
        <div className ='userbox'>
            <img src={`https://robohash.org/${id}?size=150x150`} alt={name} />
            <h2>{name}</h2>
            <h3>{username}</h3>
            <p>{email}</p>
        </div>
    );
};

export default User;