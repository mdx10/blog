import type { Meta, StoryObj } from '@storybook/react';
import { ArticleView } from '@/entities/Article';

import { ArticleViewSelector } from './ArticleViewSelector';

const meta: Meta<typeof ArticleViewSelector> = {
    title: 'features/Article/ArticleViewSelector',
    component: ArticleViewSelector,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleViewSelector>;

export const Primary: Story = {
    args: {
        view: ArticleView.GRID,
    },
};
