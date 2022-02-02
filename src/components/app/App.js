import { useState, useEffect } from "react";

import useUserService from '../../services/UsersService';
import SortBlock from "../sortBlock/SortBlock";
import UserList from "../userList/UserList";
import UserProfile from "../userProfile/UserProfile";

const App = () => {

	const [usersList, setUsersList] = useState([]);
	const [userSelected, setUserSelected] = useState(0);
	const [isShow, setIsShow] = useState(false);

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

	const onSortCity = () => {
        const result = usersList.sort((prev, next) => {
			return prev.address.city.toLowerCase() > next.address.city.toLowerCase() ? 1 : -1;
        })
        setUsersList([...result])
    }

	const onSortCompany = () => {
		const result = usersList.sort((prev, next) => {
			return prev.company.name.toLowerCase() > next.company.name.toLowerCase() ? 1 : -1;
        })
        setUsersList([...result])
	}

	const onUserSelected = (id) => {
		setUserSelected(id);
	}

	const onToggleDescrUser = () => {
		setIsShow(isShow => !isShow)
	}

	return (
		<div className="app">
			<SortBlock onSortCity={onSortCity} onSortCompany={onSortCompany}/>
			{!isShow && <UserList 
							usersList={usersList} 
							process={process}
							onUserSelected={onUserSelected}
							onToggleDescrUser={onToggleDescrUser}/>}
			{isShow && <UserProfile onToggleDescrUser={onToggleDescrUser} userId={userSelected} usersList={usersList}/>}
		</div>
	);
}

export default App;
