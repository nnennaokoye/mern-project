import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { fetchTasks, modifyTask } from '../taskSlice';

interface Task {
    id: string;
    title: string;
    completed: boolean;
}

const TaskList: React.FC = () => {
    const dispatch: AppDispatch = useDispatch(); 
    const tasks = useSelector((state: RootState) => state.tasks.tasks);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(fetchTasks()); 
            } catch (error) {
                console.error('Failed to fetch tasks:', error);
            }
        };

        fetchData();
    }, [dispatch]);

    const handleToggleComplete = (taskId: string) => {
        const task = tasks.find((t: Task) => t.id === taskId);
        if (task) {
            dispatch(modifyTask({ ...task, completed: !task.completed }));
        }
    };

    return (
        <ul>
            {tasks.length > 0 ? (
                tasks.map((task: Task) => (
                    <li key={task.id}>
                        <input 
                            type="checkbox" 
                            checked={task.completed} 
                            onChange={() => handleToggleComplete(task.id)} 
                        />
                        {task.title}
                    </li>
                ))
            ) : (
                <li>No tasks available</li>
            )}
        </ul>
    );
};

export default TaskList;
