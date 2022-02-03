import { useHttp } from "../hooks/http.hook";

const useUsersService = () => {
    const {request, clearError, process, setProcess} = useHttp();

    const _baseApi = 'https://jsonplaceholder.typicode.com/users';

    const getUsers = async () => {
        const res = await request(`${_baseApi}`);
        return res;
    }

    return {
        clearError,
        process,
        setProcess,
        getUsers
    }
}

export default useUsersService;