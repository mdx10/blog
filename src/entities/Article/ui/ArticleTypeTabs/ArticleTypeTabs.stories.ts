import type { Meta, StoryObj } from '@storybook/react';

import { ArticleType } from '../../model/types/Article';
import { ArticleTypeTabs } from './ArticleTypeTabs';

const meta: Meta<typeof ArticleTypeTabs> = {
    title: 'entities/Article/ArticleTypeTabs',
    component: ArticleTypeTabs,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleTypeTabs>;

export const Primary: Story = {
    args: {
        value: ArticleType.IT,
    },
};
