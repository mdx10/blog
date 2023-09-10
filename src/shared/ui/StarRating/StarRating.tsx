import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import StarIcon from '@/shared/assets/icons/star-icon.svg';
import styles from './StarRating.module.scss';

interface StarRatingProps {
    className?: string;
    size?: number;
    selectedStars?: number;
    onSelect?: (selectedStars: number) => void;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const {
        className, selectedStars = 0, onSelect, size = 24,
    } = props;

    const [currentStarsCount, setCurrentStarsCount] = useState(0);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) setCurrentStarsCount(starsCount);
    };

    const onLeave = () => {
        if (!isSelected) setCurrentStarsCount(0);
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <div className={classNames(styles.root, {}, [className])}>
            {stars.map((starNumber) => (
                <StarIcon
                    className={classNames(
                        styles.starIcon,
                        {
                            [styles.hovered]: currentStarsCount >= starNumber,
                            [styles.selected]: isSelected,
                        },
                    )}
                    key={starNumber}
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                />
            ))}
        </div>
    );
});
