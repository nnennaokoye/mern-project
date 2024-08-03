// src/taskSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppDispatch } from './store';

interface Task {
    id: string;
    title: string;
    completed: boolean;
}

interface TaskState {
    tasks: Task[];
}

const initialState: TaskState = {
    tasks: [],
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTasks: (state, action: PayloadAction<Task[]>) => {
            state.tasks = action.payload;
        },
        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks.push(action.payload);
        },
        updateTask: (state, action: PayloadAction<Task>) => {
            const index = state.tasks.findIndex(task => task.id === action.payload.id);
            if (index !== -1) {
                state.tasks[index] = action.payload;
            }
        },
    },
});

export const { setTasks, addTask, updateTask } = taskSlice.actions;

export const fetchTasks = () => async (dispatch: AppDispatch) => {
    const response = await axios.get('/tasks');
    dispatch(setTasks(response.data));
};

export const createTask = (task: Partial<Task>) => async (dispatch: AppDispatch) => {
    const response = await axios.post('/tasks', task);
    dispatch(addTask(response.data));
};

export const modifyTask = (task: Partial<Task>) => async (dispatch: AppDispatch) => {
    const response = await axios.put(`/tasks/${task.id}`, task);
    dispatch(updateTask(response.data));
};

export default taskSlice.reducer;
