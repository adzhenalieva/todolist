import React, {useState, useEffect} from 'react';
import {TodoForm} from "../components/TodoForm";
import {TodoList} from "../components/TodoList";
import {ITodo} from "../interfaces";

declare var confirm: (question: string) => boolean;

export const TodosPage: React.FC = () => {
    const [todos, setTodo] = useState<ITodo[]>([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];

        setTodo(saved);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        };
        setTodo(prev => [newTodo, ...prev]);
    };

    const toggleHandler = (id: number) => {
        setTodo(prev => prev.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo;
        }))
    };

    const removeHandler = (id: number) => {
        const shouldRemove = confirm('Are you sure you want delete todo?');
        if (shouldRemove) {
            setTodo(prev => prev.filter(todo => todo.id !== id))
        }

    };

    return (
        <>
            <TodoForm onAdd={addHandler}/>
            <TodoList todos={todos} onRemove={removeHandler} onToggle={toggleHandler}/>
        </>
    )
};
