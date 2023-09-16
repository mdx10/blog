import { classNames } from '@/shared/lib/classNames/classNames';
import GridIcon from '@/shared/assets/icons/table-icon.svg';
import ListIcon from '@/shared/assets/icons/list-icon.svg';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { ArticleView } from '../../model/consts/articleConsts';
import styles from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}
const viewTypes = [
    {
        view: ArticleView.GRID,
        Icon: GridIcon,
    },
    {
        view: ArticleView.LIST,
        Icon: ListIcon,
    },
];
export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => onViewClick?.(newView);

    return (
        <div className={classNames(styles.root, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button theme={ThemeButton.CLEAR} onClick={onClick(viewType.view)} key={viewType.view}>
                    <viewType.Icon
                        className={classNames(styles.icon, { [styles.selected]: viewType.view === view })}
                    />
                </Button>
            ))}
        </div>
    );
};
