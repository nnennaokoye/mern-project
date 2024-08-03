// src/components/AddTask.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../taskSlice';

const AddTask: React.FC = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (title.trim()) {
            dispatch(createTask({ title }));
            setTitle('');
        }
    };

    return (
        <div>
            <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="New task" 
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default AddTask;
