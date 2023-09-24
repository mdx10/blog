import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../../Button/Button';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
    title: 'shared/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}
            >
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {
    args: {
        trigger: <Button>Trigger</Button>,
        items: [
            {
                content: 'first',
            },
            {
                content: 'second',
                disabled: true,
            },
            {
                content: 'third',
            },
        ],
    },
};
