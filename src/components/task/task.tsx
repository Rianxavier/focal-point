"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import trash from '../../app/images/trash.png';
import styles from './task.module.scss';

interface TaskProps {
    id: string;
    title: string;
    completed: boolean
    toggleTaskCompletion: (id: string) => void
    onDelete: () => void
}

export const Task = ({ ...props }: TaskProps) => {
    const router = useRouter()

    return (
        <div className={styles.taskContainer} onClick={() => props.toggleTaskCompletion(props.id)}>
            <label className={styles.checkboxContainer}>
                <div className={`${styles.checkbox} ${props.completed ? styles.checkboxCompleted : ''}`}>
                    <input
                        type="checkbox"
                        checked={props.completed}
                    />
                    <span className={styles.checkmark}></span>
                </div>
                <span className={`${styles.taskTitle} ${props.completed ? styles.finished : ''}`}>
                    {props.title}
                </span>
            </label >
            <Image src={trash} alt="icone de Lixeira" width={18} height={20} onClick={(e) => { e.stopPropagation(); props.onDelete() }} />
        </div >
    )
}