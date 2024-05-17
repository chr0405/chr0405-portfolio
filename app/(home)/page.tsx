'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import LoginModal from '../../components/LoginModal';

export default function Home() {
    const pathname = usePathname();
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        if (pathname === '/log-in') {
            setModalShow(true);
        }
    }, [pathname]);

    const openModal = () => {
        setModalShow(true);
        window.history.pushState(null, '', '/log-in');
    };

    const closeModal = () => {
        setModalShow(false);
        window.history.pushState(null, '', '/');
    };

    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <button onClick={openModal}>Login</button>
            <LoginModal show={modalShow} onClose={closeModal} />
        </div>
    );
}