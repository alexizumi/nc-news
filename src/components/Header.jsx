// /src/components/Header.jsx

import React, { useContext } from 'react';
import { UserContext } from '../context/User';
import NewsNavbar from './NewsNavbar';

export default function Header() {
    const { user, setUser } = useContext(UserContext);

    return (
        <>
            <NewsNavbar />
        </>
    )
}
