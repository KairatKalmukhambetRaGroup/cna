import '@/styles/admin/applications.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Loading from '../Loading';
import { async } from 'regenerator-runtime';
import { dateConvertWithTime } from '@/utilFunctions/dateConvert';

const Applications = () => {
    const [applications, setApplications] = useState(null);
    const [isArchive, setIsArchive] = useState(false);

    const getApplications = async () => {
        const {data} = await axios.get(`/api/applications?archive=${isArchive}`, {validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        setApplications(data);
    }

    useEffect(()=>{
        setApplications(null);
        getApplications();
    },[isArchive])

    const archive = async (id) => {
        const {data} = await axios.patch(`/api/applications`, {id, archive: isArchive},{validateStatus: function (status) { return true }, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}});
        setApplications(data);

    }

    return (
        <div id="applications">
            <div className="heading">
                Заявки
            </div>
            <div className="tab">
                <div className="tab-items">
                    <div className={`tab-item ${isArchive ? '' : 'active'}`} onClick={(e)=>{e.preventDefault(); setIsArchive(false)}} >Новые</div>
                    <div className={`tab-item ${isArchive ? 'active' : ''}`} onClick={(e)=>{e.preventDefault(); setIsArchive(true)}} >Архив</div>
                </div>
                <table className='tab-content'>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Имя</th>
                            <th>Телефон</th>
                            <th>Дата</th>
                            {!isArchive && 
                                <th>Действие</th>
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {applications ? 
                            applications.length > 0 ? 
                                applications.map((item, key)=>(
                                    <tr key={key}>
                                        <td>{Number(key) + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.phone}</td>
                                        <td>{dateConvertWithTime(item.createdAt)}</td>
                                        {!isArchive && 
                                            <td>
                                                <div className='action' onClick={(e)=>{e.preventDefault(); archive(item._id)}}>
                                                    Архивировать
                                                </div>
                                            </td>
                                        }
                                    </tr>
                                ))
                            :
                                (
                                    <tr>
                                        <td className='center' colSpan={5}>Нет заявок</td>
                                    </tr>
                                ) 
                        : (
                            <tr>
                                <td className='center' colSpan={5}><Loading small={true} /></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Applications;