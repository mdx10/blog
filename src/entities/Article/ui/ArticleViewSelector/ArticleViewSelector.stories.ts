import type { Meta, StoryObj } from '@storybook/react';

import { ArticleView } from '../../model/consts/articleConsts';
import { ArticleViewSelector } from './ArticleViewSelector';

const meta: Meta<typeof ArticleViewSelector> = {
    title: 'entities/Article/ArticleViewSelector',
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
