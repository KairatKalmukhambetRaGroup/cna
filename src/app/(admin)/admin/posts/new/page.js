'use client'

import '@/styles/admin/createpost.scss';

import PostForm from '@/components/Admin/PostForm';

const CreatePost = () => {

    return (
        <div id="create-post">
            <div className="heading">
                Добавить объявление
            </div>
            <PostForm />
        </div>
    );
};

export default CreatePost;