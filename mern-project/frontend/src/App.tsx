import React from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import FilterTasks from './components/FilterTasks';

const App: React.FC = () => {
    return (
        <div>
            <h1>Task Management App</h1>
            <AddTask />
            <FilterTasks />
            <TaskList />
        </div>
    );
};

export default App;
