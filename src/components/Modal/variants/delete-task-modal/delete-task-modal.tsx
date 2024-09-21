"use client";

import { Button } from "@/components/button/button";
import { Modal } from "@/components/Modal/modal";
import { useTasks } from "@/context/task-provider";
import { ForwardedRef, forwardRef, useImperativeHandle, useState } from "react";
import styles2 from '../add-task-modal/add-tas-modal.module.scss';
import styles from './delete-task-modal.module.scss';

export interface DeleteTaskRef {
    open: (id: string) => void;
    close: () => void;
}

interface DeleteTaskProps { name?: string }

const DeleteTask = forwardRef((props: DeleteTaskProps, ref: ForwardedRef<DeleteTaskRef>) => {
    const { deleteTask } = useTasks();

    const [open, setOpen] = useState(false);
    const [id, setId] = useState<string>('');

    useImperativeHandle(ref, () => ({
        open(id: string) {
            setOpen(true)
            setId(id)
        }, close() {
            setOpen(false)
            setId('')
        },
    }), [])

    const handleDeleteTask = () => {
        deleteTask(id)
        setOpen(false)
        setId('')
    }

    return (
        open && (
            <Modal>
                <form action="">
                    <h2 className={styles2.title}>Deletar tarefa</h2>
                    <p className={styles.description}>Tem certeza que você desja deletar essa tarefa?</p>
                    <div className={styles2.buttonsContainer}>
                        <Button cancel label='Cancelar' onClick={() => setOpen(false)} />
                        <Button label='Deletar' delete onClick={() => handleDeleteTask()} />
                    </div>
                </form>
            </Modal>
        )
    )
})

DeleteTask.displayName = "DeleteTask";

export default DeleteTask;