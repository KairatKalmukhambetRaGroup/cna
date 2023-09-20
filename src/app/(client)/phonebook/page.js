'use client'

import PhoneBook from "@/components/PhoneBook";

const PhoneBookPage = ({searchParams}) => {
    return <PhoneBook query={searchParams} />
};

export default PhoneBookPage;