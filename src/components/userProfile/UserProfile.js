import { useState } from 'react';

import './userProfile.scss';
import '../..//style/fontSize.scss';

const UserProfile = (props) => {

    const [read, setRead] = useState(true);

    const onToggleRead = () => {
        setRead(read => !read)
    }

    const element = props.usersList.find(item => item.id === props.userId);

    const {name, username, email, address, phone, website} = element;

    const [dataUser, setDataUser] = useState(() => {
        return {
            name: name,
            username: username,
            email: email,
            address: address.street,
            city: address.city,
            zipcode: address.zipcode,
            phone: phone,
            website: website
        }
    })

    const onChangeInput = (e) => {
        setDataUser(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const colorInput = read ? {'opacity': '0.3'} : {'opacity': '1'};
    const colorButton = read ? {'background': '#AFAFAF'} : {'background' : '#52CF4F'}

    return (
        <div className='form'>
            <div className='form__block'>
                <h2 className='fz_14'>Профиль пользователя</h2>
                <button className='form__change fz_12' onClick={onToggleRead}>Редактировать</button>
            </div>
            <form>
                <div className='form__wrapper'>
                    <label className="fz_8" htmlFor="name">Name</label>
                    <input 
                        className="form__input fz_12" 
                        value={dataUser.name} 
                        type="name" 
                        id="name" 
                        name="name" 
                        readOnly={read}
                        style={colorInput}
                        onChange={onChangeInput}/>
                    <label className="fz_8" htmlFor="username">User Name</label>
                    <input 
                        className="form__input fz_12" 
                        value={dataUser.username} 
                        id="username" 
                        name="username" 
                        readOnly={read}
                        style={colorInput}
                        onChange={onChangeInput}/>
                    <label className="fz_8" htmlFor="email">E-mail</label>
                    <input 
                        className="form__input fz_12" 
                        value={dataUser.email} 
                        type="email" 
                        id="email" 
                        name="email" 
                        readOnly={read}
                        style={colorInput}
                        onChange={onChangeInput}/>
                    <label className="fz_8" htmlFor="street">Street</label>
                    <input 
                        className="form__input fz_12" 
                        value={dataUser.address} 
                        id="street"
                        name="street" 
                        readOnly={read}
                        style={colorInput}
                        onChange={onChangeInput}/>
                    <label className="fz_8" htmlFor="city">City</label>
                    <input 
                        className="form__input fz_12" 
                        value={dataUser.city} 
                        id="city"
                        name="city" 
                        readOnly={read}
                        style={colorInput}
                        onChange={onChangeInput}/>
                    <label className="fz_8" htmlFor="zipcode">Zip code</label>
                    <input 
                        className="form__input fz_12" 
                        value={dataUser.zipcode} 
                        id='zipcode'
                        name="zipcode" 
                        readOnly={read}
                        style={colorInput}
                        onChange={onChangeInput}/>
                    <label className="fz_8" htmlFor="phone">Phone</label>
                    <input 
                        className="form__input fz_12" 
                        value={dataUser.phone} 
                        type="phone" 
                        id="phone" 
                        name="phone" 
                        readOnly={read}
                        style={colorInput}
                        onChange={onChangeInput}/>
                    <label className="fz_8" htmlFor="website">Website</label>
                    <input 
                        className="form__input fz_12" 
                        value={dataUser.website} 
                        id="website"
                        name="website"
                        style={colorInput}
                        onChange={onChangeInput}/>
                    <label className="fz_8" htmlFor="name">Name</label>
                    <textarea className='form__area fz_12' readOnly={read}></textarea>
                </div>
                <div className='form__block'>
                    <button className='form__change' onClick={props.onToggleDescrUser}>Назад</button>
                    <button className='form__btn' style={colorButton}>Отправить</button>
                </div>
            </form>
        </div>
    )
}

export default UserProfile;