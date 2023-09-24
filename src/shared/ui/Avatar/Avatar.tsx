import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Avatar.module.scss';
import { Skeleton } from '../Skeleton';
import { AppImage } from '../AppImage';

interface AvatarProps {
    className?: string;
    alt?: string;
    src?: string;
    size?: number;
}
export const Avatar = (props: AvatarProps) => {
    const { className, src, size = 100, alt } = props;

    const imgStyles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    const fallback = <Skeleton width={size} height={size} border="50%" />;

    return (
        <AppImage
            className={classNames(styles.root, {}, [className])}
            src={src}
            alt={alt}
            style={imgStyles}
            fallback={fallback}
        />
    );
};
