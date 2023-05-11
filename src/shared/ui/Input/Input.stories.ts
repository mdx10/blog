import type { Meta, StoryObj } from '@storybook/react';

import { Input, ThemeInput } from './Input';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    args: {
        placeholder: 'Text',
    },
};

export const Invert: Story = {
    args: {
        placeholder: 'Text',
        theme: ThemeInput.INVERT,
    },
};
