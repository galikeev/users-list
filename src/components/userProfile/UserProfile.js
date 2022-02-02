import './userProfile.scss';

const UserProfile = (props) => {

    const element = props.usersList.find(item => item.id === props.userId);

    const {name, username} = element;

    return (
        <>
            <div>{name}</div>
            <div>{username}</div>
        </>
    )
}

export default UserProfile;