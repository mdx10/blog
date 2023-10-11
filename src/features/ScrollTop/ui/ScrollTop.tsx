import { useEffect, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ThemeButton } from '@/shared/ui/Button';
import ArrowTopIcon from '@/shared/assets/icons/arrow-top-icon.svg';
import styles from './ScrollTop.module.scss';

interface ScrollTopProps {
    className?: string;
}
export const ScrollTop = (props: ScrollTopProps) => {
    const { className } = props;

    const [isVisible, setIsVisible] = useState(false);

    const appContainer = document.getElementsByClassName('app')[0];

    useEffect(() => {
        const handleScroll = () => setIsVisible(appContainer.scrollTop > 300);
        appContainer.addEventListener('scroll', handleScroll);

        return appContainer.removeEventListener('scroll', handleScroll);
    }, [appContainer]);
    const scrollTop = () => {
        appContainer?.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!isVisible) return null;

    return (
        <Button
            className={classNames(styles.root, {}, [className])}
            onClick={scrollTop}
            theme={ThemeButton.CLEAR}
        >
            <ArrowTopIcon />
        </Button>
    );
};
