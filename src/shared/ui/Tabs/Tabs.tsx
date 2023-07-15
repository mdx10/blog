import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode, useCallback } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

export interface TabItem {
    value: string;
    content: ReactNode;
}
interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
    const {
        className, tabs, value, onTabClick,
    } = props;
    const clickHandler = useCallback((tab: TabItem) => () => onTabClick(tab), [onTabClick]);
    return (
        <div className={classNames('', {}, [className])}>
            {tabs.map((tab) => (
                <Button
                    key={tab.value}
                    theme={tab.value === value ? ThemeButton.ACCENT : ThemeButton.INVERT}
                    onClick={clickHandler(tab)}
                >
                    {tab.content}
                </Button>
            ))}
        </div>
    );
});
