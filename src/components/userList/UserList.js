import { useState, useEffect, useMemo } from "react";

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useUserService from '../../services/UsersService';
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

const UserList = () => {
    
    const [usersList, setUsersList] = useState([]);

    const {getUsers, process, setProcess} = useUserService();

    useEffect(() => {
        onRequest()
        // eslint-disable-next-line
    }, [])

    const onRequest = () => {
        getUsers()
            .then(onUsersListLoaded)
            .then(() => setProcess('confirmed'))
    }

    const onUsersListLoaded = (usersList) => {
        setUsersList(() => [...usersList])
    }

    const renderItems = (arr) => {
        const elems = arr.map(elem => {
            const {id, ...elemProps} = elem;
            return (
                <UserItem
                    key={id}
                    {...elemProps}/>
            )
        })

        return elems;
    }

    const elements = useMemo(() => {
        return setContent(process, () => renderItems(usersList));
        // eslint-disable-next-line
    }, [process])

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