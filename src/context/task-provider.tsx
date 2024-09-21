"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface Task {
    id: string;
    title: string;
    completed: boolean;
}

interface TaskContextProps {
    tasks: Task[];
    addTask: (task: Task) => void;
    deleteTask: (id: string) => void;
    toggleTaskCompletion: (id: string) => void;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("useTasks must be used within a TaskProvider");
    }
    return context;
};

export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [tasks, setTasks] = useState<Task[]>(() => {
        const storedTasks = localStorage.getItem("tasks");
        return storedTasks ? JSON.parse(storedTasks) : [];
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task: Task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    const deleteTask = (id: string) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    const toggleTaskCompletion = (id: string) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <TaskContext.Provider
            value={{ tasks, addTask, deleteTask, toggleTaskCompletion }}
        >
            {children}
        </TaskContext.Provider>
    );
};
