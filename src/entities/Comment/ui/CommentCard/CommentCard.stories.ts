import type { Meta, StoryObj } from '@storybook/react';

import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
    title: 'shared/CommentCard',
    component: CommentCard,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Primary: Story = {
    args: {
        comment: {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, quas.',
            id: '1',
            user: { id: '1', username: 'Username' },
        },
    },
};
