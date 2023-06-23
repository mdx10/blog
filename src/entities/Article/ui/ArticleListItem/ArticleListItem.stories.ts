import type { Meta, StoryObj } from '@storybook/react';

import { ArticleListItem } from './ArticleListItem';

const meta: Meta<typeof ArticleListItem> = {
    title: 'shared/ArticleListItem',
    component: ArticleListItem,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleListItem>;

export const Primary: Story = {
    args: {},
};
