'use client'

import '@/styles/admin/advertisements.scss';
import AdvertisementForm from '@/components/Admin/AdvertisementForm';

const CreateAdvertisement = () => {
    return (
        <div id='createAd'>
            <div className='heading'>
                Добавить баннер
            </div>
            <AdvertisementForm />
        </div>
    );
};

export default CreateAdvertisement;