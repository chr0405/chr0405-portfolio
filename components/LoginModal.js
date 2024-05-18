'use client';

import React from 'react';
import styles from './componentsStyles/LoginModal.module.css';
import { useRouter } from 'next/navigation';

const LoginModal = ({ show, onClose }) => {
    const router = useRouter();

    if (!show) return null;

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div className={styles.modalOverlay} onClick={() => { onClose(); router.push('/'); }}>
            <div className={styles.modalContent} onClick={handleModalClick}>
                <div className={styles.modalHeader}>
                    <h2>Login</h2>
                    <button onClick={() => { onClose(); router.push('/'); }}>Close</button>
                </div>
                <div className={styles.modalBody}>
                    {/* Your login form goes here */}
                    <form>
                        <label>
                            Email:
                            <input type="email" name="email" />
                        </label>
                        <label>
                            Password:
                            <input type="password" name="password" />
                        </label>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;