import styles from './modal.module.scss';

interface ModalProps {
    children: React.ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}