// src/components/FilterTasks.tsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const FilterTasks: React.FC = () => {
    const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');
    const tasks = useSelector((state: RootState) => state.tasks.tasks);

    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') return task.completed;
        if (filter === 'pending') return !task.completed;
        return true;
    });

    return (
        <div>
            <button onClick={() => setFilter('all')}>All</button>
            <button onClick={() => setFilter('completed')}>Completed</button>
            <button onClick={() => setFilter('pending')}>Pending</button>
            <ul>
                {filteredTasks.map(task => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default FilterTasks;
