import './userItem.scss';
import '../../style/fontSize.scss';

const UserItem = (props) => {
    return (
        <div className='user'>
            <div className='user__descr fz_11'>ФИО: <span>{props.name}</span></div>
            <div className='user__descr fz_11'>город: <span>{props.address.city}</span></div>
            <div className='user__wrapper'>
                <div className='user__descr fz_11'>компания: <span>{props.company.name}</span></div>
                <button className='user__btn fz_12' onClick={() => {props.onUserSelected(); props.onToggleDescrUser()}}>Подробнее</button>
            </div>
        </div>
    )
}

export default UserItem;