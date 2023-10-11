import { classNames } from '@/shared/lib/classNames/classNames';
import SunIcon from '@/shared/assets/icons/sun-icon.svg';
import MoonIcon from '@/shared/assets/icons/moon-icon.svg';
import {
    Button,
    SizeButton,
    ThemeButton,
} from '../../../shared/ui/Button/Button';
import styles from './ThemeSwitcher.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Theme } from '@/shared/constants/theme';

interface ThemeSwitcherProps {
    className?: string;
}
export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
            size={SizeButton.L}
            className={classNames(styles.themeSwitcher, {}, [className])}
            square
        >
            {theme === Theme.DARK ? (
                <MoonIcon className={styles.icon} />
            ) : (
                <SunIcon className={styles.icon} />
            )}
        </Button>
    );
};
