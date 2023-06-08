import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Primary: Story = {
    args: {},

    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    username: '',
                    id: '',
                },
            },
        }),
    ],
};

export const NotAuth: Story = {
    args: {},

    decorators: [
        StoreDecorator({}),
    ],
};
