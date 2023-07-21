'use client'

import '@/styles/admin/createpost.scss';

const { default: PostForm } = require("@/components/Admin/PostForm");

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