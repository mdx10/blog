import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
    tags: ['autodocs'],
    decorators: [
        StoreDecorator({}),
    ],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Primary: Story = {
    args: {},
};
