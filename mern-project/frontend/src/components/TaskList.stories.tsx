// src/components/TaskList.stories.tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TaskList from './TaskList';
import { Provider } from 'react-redux';
import { store } from '../store';

export default {
    title: 'TaskList',
    component: TaskList,
} as ComponentMeta<typeof TaskList>;

const Template: ComponentStory<typeof TaskList> = (args) => (
    <Provider store={store}>
        <TaskList {...args} />
    </Provider>
);

export const Default = Template.bind({});
