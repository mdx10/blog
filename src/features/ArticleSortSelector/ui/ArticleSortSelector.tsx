import { useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/Select';
import { SortOrder } from '@/shared/types/sort';
import styles from './ArticleSortSelector.module.scss';
import { ArticleSortField } from '@/entities/Article';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeSort: (newSort: ArticleSortField) => void;
    onChangeOrder: (newOrder: SortOrder) => void;
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
    const { className, sort, order, onChangeOrder, onChangeSort } = props;

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: 'по возрастанию',
            },
            {
                value: 'desc',
                content: 'по убыванию',
            },
        ],
        [],
    );

    const sortOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: 'по дате',
            },
            {
                value: ArticleSortField.VIEW,
                content: 'по просмотам',
            },
            {
                value: ArticleSortField.TITLE,
                content: 'по названию',
            },
        ],
        [],
    );

    return (
        <div className={classNames(styles.root, {}, [className])}>
            <Select
                className={styles.sort}
                placeholder="Сортировать по"
                options={sortOptions}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                className={styles.sort}
                placeholder="по"
                options={orderOptions}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    );
};
