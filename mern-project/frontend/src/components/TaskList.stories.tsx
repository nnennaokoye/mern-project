import { ComponentStory, ComponentMeta } from '@storybook/react';
import AddTask from './AddTask';
import { Provider } from 'react-redux';
import { store } from '../store';

export default {
    title: 'AddTask',
    component: AddTask,
} as ComponentMeta<typeof AddTask>;

const Template: ComponentStory<typeof AddTask> = (args) => (
    <Provider store={store}>
        <AddTask {...args} />
    </Provider>
);

export const Default = Template.bind({});
Default.args = {
    title: 'My Task',
    onAdd: () => console.log('Task added!'),
};
