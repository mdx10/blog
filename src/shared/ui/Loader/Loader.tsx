import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Loader.module.scss';

export enum LoaderTheme {
    PRIMARY = 'primary',
    INVERT = 'invert',
}

interface LoaderProps {
    className?: string;
    theme?: LoaderTheme;
}
export const Loader = ({ className, theme = LoaderTheme.PRIMARY }: LoaderProps) => (
    <div className={classNames(styles['lds-ellipsis'], {}, [className, styles[theme]])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
