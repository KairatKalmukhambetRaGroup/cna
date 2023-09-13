import { useState } from "react";
import TextInput from "./Inputs/TextInput";
import '@/styles/application.scss';
import axios from "axios";
import Loading from "./Loading";

const initFormData = {
    name: '',
    phone: '',
}

const ApplicationForm = () => {
    const [formData, setFormData] = useState(initFormData);
    const [response, setResponse] = useState(null);

    const handleChange = (name, value) => {
        setFormData({...formData, [name]: value});
    }
    
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResponse('loading');
        try {
            
            const {status} = await axios.post('/api/applications', formData, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
    
            if(status === 200){
                setResponse('success');
                setFormData(initFormData);
            }else{
                setResponse('fail');
            }
        } catch (error) {
            setResponse('fail');
            
        }

    }

    return (
        <div id="application">
            <ApplicationResponseModal status={response} setStatus={setResponse} />
            <div className="container">
                <div className="content">
                    <div className="heading">
                        <div className="title">
                            Форма Обратного Звонка: <br/> Ваши Недвижимостные Решения Одним Кликом
                        </div>
                        <div className="subtitle">
                            🏠 Хотите продать или сдать в аренду свою квартиру или дом? Мы здесь, чтобы помочь!
                        </div>
                    </div>
                    <div className="form">
                        <div className="description">
                            <p>
                                <strong>Продажа или аренда недвижимости</strong> — это ответственные и сложные процессы, которые требуют профессионального подхода. Наша команда опытных риелторов готова обеспечить вам успешную и безопасную сделку.
                            </p>
                            
                            <div>
                                    <strong>
                                        Как это работает?
                                    </strong>
                                <ol>
                                    <li>
                                    Заполните Форму: Введите ваше имя и номер телефона.
                                    </li>
                                    <li>
                                    Подтверждение: Наш менеджер свяжется с вами для уточнения деталей и ответит на все ваши вопросы.
                                    </li>
                                    <li>
                                    Бесплатная Консультация: Получите профессиональную консультацию по всем аспектам продажи или аренды недвижимости.
                                    </li>
                                    <li>
                                    Безопасная Сделка: Мы поможем вам собрать все необходимые документы и проведем сделку на выгодных для вас условиях.
                                    </li>
                                </ol>
                            </div>
                            <p>
                            🔒 Ваши данные находятся в полной безопасности и не будут переданы третьим лицам.
                            </p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <p>
                                📞 Оставьте свои контактные данные, и мы перезвоним вам в ближайшее время!
                            </p>
                            <div className="inputs">
                                <TextInput name="name" label="Имя Фамилия" placeholder="Имя фамилия" value={formData.name} handleChange={handleChange} />
                                <TextInput name="phone" label="Номер телефона" placeholder="+7 777 123 4567" value={formData.phone} handleChange={handleChange} />
                            </div>
                            <input type="submit" value="Отправить" className="btn" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicationForm;

const ApplicationResponseModal = ({status, setStatus}) => {
    const close = () => {
        setStatus(null);
    }
    if(!status)
        return ;
    return (
        <div className="modal">
            <div className={`content ${status}`}>
                {status === 'loading' ? <Loading /> : (
                    <>
                        <div className="text">
                            <div className="title">
                                {status === 'success' && '🎉 Спасибо за Вашу Заявку!'}
                                {status === 'fail' && '😢 К сожалению, Что-то Пошло Не Так'}
                            </div>
                            <div className="subtitle">
                                {status === 'success' && 'Ваша заявка успешно отправлена. Наш специалист свяжется с вами в ближайшее время для консультации по продаже или аренде вашей недвижимости.'}
                                {status === 'fail' && 'Ваша заявка не была отправлена. Пожалуйста, попробуйте ещё раз.'}
                            </div>
                        </div>
                        <div className="btn" onClick={close}>Закрыть</div>
                    </>
                )}
            </div>
        </div>
    );
}