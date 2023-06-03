import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import styles from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    alt?: string;
    src?: string;
    size?: number;
}
export const Avatar = (props: AvatarProps) => {
    const {
        className,
        src,
        size = 100,
        alt,
    } = props;

    const imgStyles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    return (
        <img
            className={classNames(styles.root, {}, [className])}
            src={src}
            alt={alt}
            style={imgStyles}
        />
    );
};
