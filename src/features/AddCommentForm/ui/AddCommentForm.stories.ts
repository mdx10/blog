import type { Meta, StoryObj } from '@storybook/react';

import { AddCommentForm } from './AddCommentForm';

const meta: Meta<typeof AddCommentForm> = {
    title: 'shared/AddCommentForm',
    component: AddCommentForm,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Primary: Story = {
    args: {},
};
