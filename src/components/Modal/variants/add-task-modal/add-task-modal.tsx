"use client";

import { Button } from "@/components/button/button";
import { Input } from "@/components/input/input";
import { Modal } from "@/components/Modal/modal";
import { useTasks } from "@/context/task-provider";
import { ForwardedRef, forwardRef, useImperativeHandle, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './add-tas-modal.module.scss';

export interface AddTaskRef {
    open: () => void;
    close: () => void;
}

interface AddTaskProps { }

const AddTask = forwardRef((props: AddTaskProps, ref: ForwardedRef<AddTaskRef>) => {
    const { addTask } = useTasks();
    const [title, setTitle] = useState('');
    const [error, setError] = useState(false);
    const [open, setOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        open() {
            setOpen(true)
        }, close() {
            setOpen(false)
        },
    }), [])

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
        setOpen(false)
    };

    return (
        open && (
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
                        <Button cancel type='button' label='Cancelar' onClick={() => setOpen(false)} />
                        <Button type="submit" label='Adicionar' onClick={() => { }} />
                    </div>
                </form>
            </Modal>
        )
    );
})

export default AddTask;
