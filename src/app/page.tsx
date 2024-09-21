"use client";
import { Button } from "@/components/button/button";
import { Header } from "@/components/header/header";
import { Task } from "@/components/task/task";
import { useTasks } from "@/context/task-provider";
import { useRouter } from 'next/navigation';
import styles from './page.module.scss';
import { useRef } from "react";
import AddTask, { AddTaskRef } from "../components/Modal/variants/add-task-modal/add-task-modal";
import DeleteTask, { DeleteTaskRef } from "../components/Modal/variants/delete-task-modal/delete-task-modal";

export default function Home() {
  const router = useRouter();
  const { tasks, toggleTaskCompletion } = useTasks();
  const addTaskModalRef = useRef<AddTaskRef>(null)
  const deleteTaskModalRef = useRef<DeleteTaskRef>(null)

  const incompleteTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className={styles.body}>
      <Header />

      <main className={styles.main}>
        <div className={styles.listContainer}>

          {tasks.length === 0 ? (
            <h3 className={styles.titleList}>Nenhuma tarefa adicionada</h3>
          ) : (
            <h3 className={styles.titleList}>Sua tarefas de hoje</h3>
          )}

          {incompleteTasks.map((item) => (
            <Task key={item.id} id={item.id} title={item.title} completed={item.completed}
              toggleTaskCompletion={toggleTaskCompletion}
              onDelete={() => deleteTaskModalRef.current?.open(item.id)} />
          ))}

          {completedTasks.length > 0 && (
            <>
              <h3 className={styles.titleList}>Tarefas finalizadas</h3>
              {completedTasks.map((item) => (
                <Task key={item.id} id={item.id} title={item.title} completed={item.completed}
                  toggleTaskCompletion={toggleTaskCompletion}
                  onDelete={() => deleteTaskModalRef.current?.open(item.id)} />
              ))}
            </>
          )}
        </div>

        <Button onClick={() => addTaskModalRef.current?.open()} label="Adicionar nova tarefa" />

      </main>
      <AddTask ref={addTaskModalRef} />
      <DeleteTask ref={deleteTaskModalRef} />
    </div>
  );
}
