import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/decorators/StyleDecorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    globalTypes: {
        theme: {
            name: 'Theme',
            description: 'Global theme for components',
            defaultValue: 'light',
            toolbar: {
                items: [
                    {
                        value: 'light',
                        title: 'Light (default)',
                        icon: 'sun',
                    },
                    {
                        value: 'dark',
                        title: 'Dark',
                        icon: 'moon',
                    },
                ],
                showName: true,
                dynamicTitle: true,
            },
        },
    },
    decorators: [
        StyleDecorator,
    ],
};

export default preview;
