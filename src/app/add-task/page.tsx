"use client";

import { useState } from 'react';
import { Modal } from "@/components/Modal/modal";
import styles from './page.module.scss';
import { useTasks } from "@/context/task-provider";
import { Button } from "@/components/button/button";
import { Input } from "@/components/input/input";
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation';

const AddTask = () => {
    const { addTask } = useTasks();
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [error, setError] = useState(false);

    const handleAddTask = (e: React.FormEvent) => {
        e.preventDefault();

        if (!title.trim()) {
            setError(true);
            return;
        }

        const newTask = {
            id: uuidv4(),
            title: title.trim(),
            completed: false,
        };

        addTask(newTask);
        setTitle('');
        setError(false);
        router.push("/");
    };

    return (
        <Modal>
            <form onSubmit={handleAddTask}>
                <h2 className={styles.title}>Nova Tarefa</h2>
                {error && <p className={styles.error}>Preencha o título para adicionar a tarefa!</p>}
                <Input
                    label='Título'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <div className={styles.buttonsContainer}>
                    <Button cancel type='button' label='Cancelar' onClick={() => router.push("/")} />
                    <Button type="submit" label='Adicionar' onClick={() => { }} />
                </div>
            </form>
        </Modal>
    );
};

export default AddTask;
