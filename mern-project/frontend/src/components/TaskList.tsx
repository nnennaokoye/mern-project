// src/components/TaskList.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchTasks, modifyTask } from '../taskSlice';

const TaskList: React.FC = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state: RootState) => state.tasks.tasks);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const handleToggleComplete = (taskId: string) => {
        const task = tasks.find(t => t.id === taskId);
        if (task) {
            dispatch(modifyTask({ ...task, completed: !task.completed }));
        }
    };

    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <input 
                        type="checkbox" 
                        checked={task.completed} 
                        onChange={() => handleToggleComplete(task.id)} 
                    />
                    {task.title}
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
