"use client";

import { Modal } from "@/components/Modal/modal"
import styles2 from '../../add-task/page.module.scss'
import styles from './page.module.scss'
import { Button } from "@/components/button/button";
import { useParams, useRouter } from "next/navigation";
import { useTasks } from "@/context/task-provider";

const DeleteTask = () => {
    const router = useRouter();
    const { deleteTask } = useTasks();
    const { id } = useParams()

    const taskId = Array.isArray(id) ? id[0] : id;

    const handleDeleteTask = () => {
        deleteTask(taskId)
        router.push("/");
    }

    return (
        <Modal>
            <form action="">
                <h2 className={styles2.title}>Deletar tarefa</h2>
                <p className={styles.description}>Tem certeza que você desja deletar essa tarefa?</p>
                <div className={styles2.buttonsContainer}>
                    <Button cancel label='Cancelar' onClick={() => router.back()} />
                    <Button label='Deletar' delete onClick={() => handleDeleteTask()} />
                </div>
            </form>
        </Modal>
    )
}

export default DeleteTask;