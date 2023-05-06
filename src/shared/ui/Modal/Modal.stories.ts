import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolore doloremque explicabo iure nonomnis, quos ratione sequi ullam vel!',
        isOpen: true,
    },
};
