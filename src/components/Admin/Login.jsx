import { useUserContext } from '@/app/(admin)/admin/layout';
import '@/styles/admin/login.scss';
import axios from 'axios';
import { useState } from 'react';

const initFormData = {email: '', password: ''};

const Login = () => {
    const {login} = useUserContext();
    const [formData, setFormData] = useState(initFormData);
    const [error, setError] = useState('');


    const loginApi = async () => {
        try {
            const {data, status} = await axios.post(`/api/login`, formData, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
            console.log(data)
            if(status === 200)
                login(data);
            else if(status === 404 || status === 401)
                setError('Неправильно введен логин или пароль');
            else
                setError('Что-то пошло не так, попробуйте еще раз');
        } catch (error) {
            console.log(error);
            setError('Что-то пошло не так, попробуйте еще раз');
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        const value = e.currentTarget.value;
        const name = e.currentTarget.name;
        setFormData({...formData, [name]: value});
        setError('');
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let err = null;
        if(!formData.email || !formData.password){
            err = 'Заполните объязательные поля';
        }
        if(err){
            setError(err);
        }else{
            loginApi();
        }
    }

    return (
        <div id="login">
            <form onSubmit={handleSubmit}>
                <div className="title">
                    Войти в систему
                </div>
                <div className="inputs">
                    <div className="form-group">
                        <label>E-mail</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Пароль</label>
                        <input type="password" name="password"  value={formData.password} onChange={handleChange}/>
                    </div>
                    {error && (
                        <div className="error">{error}</div>
                    )}
                </div>    
                <input type="submit" value="Войти" className='submit' />
            </form>
        </div>
    );
};

export default Login;