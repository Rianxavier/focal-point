import styles from './header.module.scss';
import logo from '../../app/images/logo.png'
import Image from 'next/image';
import { formatDate } from '@/utils/formatDate';

export const Header = () => {
    const today = new Date()

    return (
        <header className={styles.header}>
            <Image src={logo} alt="Logo" width={150} height={36} />
            <h3 className={styles.greeting}>Bem-vindo de volta, Marcus</h3>
            <p className={styles.date}>{formatDate(today)}</p>
        </header>
    );
};
