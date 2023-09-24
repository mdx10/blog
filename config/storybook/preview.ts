import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/decorators/StyleDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/decorators/RouterDecorator';

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
            defaultValue: 'app-light-theme',
            toolbar: {
                items: [
                    {
                        value: 'app-light-theme',
                        title: 'Light (default)',
                        icon: 'sun',
                    },
                    {
                        value: 'app-dark-theme',
                        title: 'Dark',
                        icon: 'moon',
                    },
                ],
                showName: true,
                dynamicTitle: true,
            },
        },
    },
    decorators: [StyleDecorator, RouterDecorator],
};

export default preview;
