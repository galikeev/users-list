import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import UserItem from "../userItem/UserItem";

import './userList.scss';
import '../../style/fontSize.scss';

const setContent = (process, Component) => {
    switch (process) {
        case 'waiting':
            return <Spinner/>
        case 'loading':
            return <Spinner/>
        case 'confirmed':
            return <Component/>
        case 'error':
            return <ErrorMessage/>
        default:
            throw new Error('Unexpected process state')
    }
}

const UserList = (props) => {

    const renderItems = (arr) => {
        const elems = arr.map(elem => {
            const {id, ...elemProps} = elem;
            return (
                <UserItem
                    onUserSelected={() => props.onUserSelected(id)}
                    onToggleDescrUser={props.onToggleDescrUser}
                    key={id}
                    {...elemProps}/>
            )
        })

        return elems;
    }

    const elements = setContent(props.process, () => renderItems(props.usersList));

    return (
        <div className="list">
            <h2 className="fz_14 list__title">Список пользователей</h2>
            <div className="list__users">
                {elements}
            </div>
        </div>
    )
}

export default UserList;