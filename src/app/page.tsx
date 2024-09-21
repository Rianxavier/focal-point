"use client";
import { Button } from "@/components/button/button";
import { Header } from "@/components/header/header";
import { Task } from "@/components/task/task";
import { useRouter } from 'next/navigation';
import styles from './page.module.scss';
import { useTasks } from "@/context/task-provider";

export default function Home() {
  const router = useRouter();
  const { tasks, toggleTaskCompletion } = useTasks();

  const incompleteTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className={styles.body}>
      <Header />

      <main className={styles.main}>
        <div className={styles.listContainer}>
          <h3 className={styles.titleList}>Sua tarefas de hoje</h3>

          {incompleteTasks.map((item) => (
            <Task key={item.id} id={item.id} title={item.title} completed={item.completed}
              toggleTaskCompletion={toggleTaskCompletion} />
          ))}

          {completedTasks.length > 0 && (
            <>
              <h3 className={styles.titleList}>Tarefas finalizadas</h3>
              {completedTasks.map(task => (
                <Task key={task.id} id={task.id} title={task.title} completed={task.completed}
                  toggleTaskCompletion={toggleTaskCompletion} />
              ))}
            </>
          )}
        </div>

        <Button onClick={() => router.push('/add-task')} label="Adicionar nova tarefa" />
      </main>
    </div>
  );
}
