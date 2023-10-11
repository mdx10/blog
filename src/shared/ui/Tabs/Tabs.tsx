import { memo, ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ThemeButton } from '../Button/Button';
import styles from './Tabs.module.scss';

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
    const { className, tabs, value, onTabClick } = props;
    const clickHandler = useCallback(
        (tab: TabItem) => () => onTabClick(tab),
        [onTabClick],
    );
    return (
        <div className={classNames('', {}, [className])}>
            {tabs.map((tab) => (
                <Button
                    className={classNames(styles.tab, {
                        [styles.active]: tab.value === value,
                    })}
                    key={tab.value}
                    theme={ThemeButton.CLEAR}
                    onClick={clickHandler(tab)}
                >
                    {tab.content}
                </Button>
            ))}
        </div>
    );
});
