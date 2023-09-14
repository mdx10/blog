// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import '@/app/styles/index.scss';
import { Story, StoryContext } from '@storybook/react';

export const StyleDecorator = (Story: Story, { globals }: StoryContext) => {
    const { theme } = globals;
    return (
        <div className={`app ${theme}`}>
            <Story />
        </div>
    );
};
