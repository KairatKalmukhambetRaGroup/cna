import '@/styles/phonebook.scss';
import Loading from './Loading';

const PhoneBookContact = ({contact}) => {
    if(!contact)
        return <Loading />
    return (
        <div id="phonebookcontact">
                <div className="heading">
                    <div className="container">
                        <div className="content">
                            <div className="name">
                                {contact.name}
                                <div className="sub">
                                    {contact.category.name}
                                </div>
                            </div>
                            {contact.phone && (
                                <a className="phone" href={`tel:${contact.phone}`}>
                                    <i></i>
                                    {contact.phone}
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            <div className="container">
                <div className="content">
                    <div className="contacts">
                        {contact.email && (
                            <div className="contact">
                                <label>Электронная почта</label>
                                <a className="data" href={`mailto:${contact.email}`}>
                                    {contact.email}
                                </a>
                            </div>
                        )}

                        {contact.whatsapp && (
                            <div className="contact">
                                <label>WhatsApp</label>
                                <a className="data" href={`wa.me/${contact.whatsapp}`}>
                                    {contact.whatsapp}
                                </a>
                            </div>
                        )}

                        {contact.telegram && (
                            <div className="contact">
                                <label>Telegram</label>
                                <a className="data" href={`t.me/${contact.telegram}`}>
                                    {contact.telegram}
                                </a>
                            </div>
                        )}

                        {contact.address && (
                            <div className="contact">
                                <label>Адрес</label>
                                <div className="data">
                                    {contact.address}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="description">
                        <label>
                            Описание
                        </label>
                        <div className="data">
                            {contact.description ? contact.description : 'Описания нет'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhoneBookContact;