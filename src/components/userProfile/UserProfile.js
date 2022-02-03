import { useState } from 'react';
import { useForm } from 'react-hook-form';

import './userProfile.scss';
import '../..//style/fontSize.scss';

const UserProfile = (props) => {

    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmitData = (data) => {
        console.log(JSON.stringify(data))
    }

    const [read, setRead] = useState(true);

    const element = props.usersList.find(item => item.id === props.userId);

    const {name, username, email, address, phone, website} = element;

    const [dataUser, setDataUser] = useState(() => {
        return {
            name: name,
            username: username,
            email: email,
            street: address.street,
            city: address.city,
            zipcode: address.zipcode,
            phone: phone,
            website: website,
            comment: ''
        }
    })

    const onToggleRead = () => {
        setRead(read => !read)
    }

    const onChangeInput = (e) => {
        setDataUser(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const colorInput = read ? {'opacity': '0.3'} : {'opacity': '1'};
    const colorButton = read ? {'background': '#AFAFAF'} : {'background' : '#52CF4F'};
    const disabledButton = read ? true : false

    return (
        <div className='form'>
            <div className='form__block'>
                <h2 className='fz_14'>Профиль пользователя</h2>
                <button className='form__change fz_12' onClick={onToggleRead}>Редактировать</button>
            </div>
            <form onSubmit={handleSubmit(onSubmitData)}>
                <div className='form__wrapper'>
                    <label className="fz_8" htmlFor="name">Name</label>
                    <input 
                        className="form__input fz_12" 
                        value={dataUser.name}
                        {...register('name', { required: true, maxLength: 20 })}
                        type="name" 
                        id="name" 
                        name="name" 
                        readOnly={read}
                        style={{...colorInput, borderColor: errors.name && 'red'}}
                        onChange={onChangeInput}/>
                    <label className="fz_8" htmlFor="username">User Name</label>
                    <input 
                        className="form__input fz_12" 
                        value={dataUser.username} 
                        {...register('username', { required: true, maxLength: 20 })}
                        id="username" 
                        name="username" 
                        readOnly={read}
                        style={{...colorInput, borderColor: errors.username && 'red'}}
                        onChange={onChangeInput}/>
                    <label className="fz_8" htmlFor="email">E-mail</label>
                    <input 
                        className="form__input fz_12" 
                        value={dataUser.email} 
                        {...register('email', {required: true, pattern: /^\S+@\S+$/i})}
                        type="email" 
                        id="email" 
                        name="email" 
                        readOnly={read}
                        style={{...colorInput, borderColor: errors.email && 'red'}}
                        onChange={onChangeInput}/>
                    <label className="fz_8" htmlFor="street">Street</label>
                    <input 
                        className="form__input fz_12" 
                        value={dataUser.street} 
                        {...register('street', { required: true, maxLength: 20 })}
                        id="street"
                        name="street" 
                        readOnly={read}
                        style={{...colorInput, borderColor: errors.street && 'red'}}
                        onChange={onChangeInput}/>
                    <label className="fz_8" htmlFor="city">City</label>
                    <input 
                        className="form__input fz_12" 
                        value={dataUser.city} 
                        {...register('city', { required: true, maxLength: 20 })}
                        id="city"
                        name="city" 
                        readOnly={read}
                        style={{...colorInput, borderColor: errors.city && 'red'}}
                        onChange={onChangeInput}/>
                    <label className="fz_8" htmlFor="zipcode">Zip code</label>
                    <input 
                        className="form__input fz_12" 
                        value={dataUser.zipcode} 
                        {...register('zipcode', { required: true })}
                        id='zipcode'
                        name="zipcode" 
                        readOnly={read}
                        style={{...colorInput, borderColor: errors.zipcode && 'red'}}
                        onChange={onChangeInput}/>
                    <label className="fz_8" htmlFor="phone">Phone</label>
                    <input 
                        className="form__input fz_12" 
                        value={dataUser.phone} 
                        {...register('phone', { required: true, minLength: 6 })}
                        type="phone" 
                        id="phone" 
                        name="phone" 
                        readOnly={read}
                        style={{...colorInput, borderColor: errors.phone && 'red'}}
                        onChange={onChangeInput}/>
                    <label className="fz_8" htmlFor="website">Website</label>
                    <input 
                        className="form__input fz_12" 
                        value={dataUser.website} 
                        {...register('website', { required: true })}
                        id="website"
                        name="website"
                        readOnly={read}
                        style={{...colorInput, borderColor: errors.website && 'red'}}
                        onChange={onChangeInput}/>
                    <label className="fz_8" htmlFor="comment">Comment</label>
                    <textarea 
                        className='form__area fz_12' 
                        value={dataUser.comment} 
                        {...register('comment')}
                        name="comment"
                        onChange={onChangeInput} 
                        readOnly={read}></textarea>
                </div>
                <div className='form__block'>
                    <button className='form__change' onClick={props.onToggleDescrUser}>Назад</button>
                    <button 
                        type="submit" 
                        className='form__btn' 
                        style={colorButton} 
                        disabled={disabledButton}
                    >
                        Отправить
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UserProfile;