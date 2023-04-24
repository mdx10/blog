import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import SunIcon from 'shared/assets/icons/sun-icon.svg';
import MoonIcon from 'shared/assets/icons/moon-icon.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}
export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
            className={classNames(styles.themeSwitcher, {}, [className])}
        >
            {theme === Theme.DARK ? <MoonIcon /> : <SunIcon />}
        </Button>
    );
};
