import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from './Drawer';

const meta: Meta<typeof Drawer> = {
    title: 'shared/Drawer',
    component: Drawer,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Primary: Story = {
    args: {
        // eslint-disable-next-line max-len
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolore doloremque explicabo iure nonomnis, quos ratione sequi ullam vel!',
        isOpen: true,
    },
    render: (args, { globals }) => <Drawer {...args} className={globals.theme} />,
};
