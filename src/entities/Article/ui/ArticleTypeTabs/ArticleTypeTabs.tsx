import { memo, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs';
import { ArticleType } from '../../model/consts/articleConsts';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;

    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: 'Все статьи',
        },
        {
            value: ArticleType.IT,
            content: 'IT',
        },
        {
            value: ArticleType.SCIENCE,
            content: 'Наука',
        },
        {
            value: ArticleType.ECONOMICS,
            content: 'Экономика',
        },
    ], []);

    const onTabClick = useCallback((tab: TabItem) => {
        onChangeType(tab.value as ArticleType);
    }, [onChangeType]);

    return (
        <Tabs
            className={classNames('', {}, [className])}
            onTabClick={onTabClick}
            tabs={typeTabs}
            value={value}
        />
    );
});
