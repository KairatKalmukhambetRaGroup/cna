'use client'

import PhoneBookCategory from "@/components/Admin/PhoneBook/Category";

export default ({params}) => {
    const {id} = params;
    return <PhoneBookCategory id={id} />
}