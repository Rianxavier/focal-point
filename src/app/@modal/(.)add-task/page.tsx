"use client";

import { useRouter } from 'next/navigation';
import styles from './page.module.scss';
import { Modal } from '@/components/Modal/modal';
import { Input } from '@/components/input/input';
import { Button } from '@/components/button/button';

const AddTaskModal = () => {
    const router = useRouter();

    const closeModal = () => {
        router.back();
    };

    return (
        <Modal>
            <form action="">
                <h2 className={styles.title}>Nova Tarefa</h2>
                <Input label='Título' />
                <div className={styles.buttonsContainer}>
                    <Button cancel label='Cancelar' onClick={closeModal} />
                    <Button label='Adicionar' onClick={() => { }} />
                </div>
            </form>
        </Modal>
    );
}

export default AddTaskModal;