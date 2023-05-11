import { classNames } from 'shared/lib/classNames/classNames';
import { Input, ThemeInput } from 'shared/ui/Input/Input';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}
export const LoginForm = ({ className }: LoginFormProps) => (
    <div className={classNames(styles.root, {}, [className])}>
        <Input placeholder="Введите логин" autoFocus theme={ThemeInput.INVERT} />
        <Input placeholder="Введите пароль" theme={ThemeInput.INVERT} />
        <Button theme={ThemeButton.ACCENT}>Войти</Button>
    </div>
);
