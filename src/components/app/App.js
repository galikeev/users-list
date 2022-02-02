import { useState, useEffect } from "react";

import useUserService from '../../services/UsersService';
import SortBlock from "../sortBlock/SortBlock";
import UserList from "../userList/UserList";

const App = () => {

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

	return (
		<div className="app">
			<SortBlock onSortCity={onSortCity} onSortCompany={onSortCompany}/>
			<UserList usersList={usersList} process={process}/>
		</div>
	);
}

export default App;
