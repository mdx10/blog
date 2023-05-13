import { classNames } from 'shared/lib/classNames/classNames';
import { Input, ThemeInput } from 'shared/ui/Input/Input';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import styles from './LoginForm.module.scss';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';

interface LoginFormProps {
    className?: string;
}
export const LoginForm = ({ className }: LoginFormProps) => {
    const dispatch = useDispatch();

    const {
        username,
        password,
        isLoading,
        error,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);
    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onSubmit = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(styles.root, {}, [className])}>
            <Input
                placeholder="Введите логин"
                theme={ThemeInput.INVERT}
                onChange={onChangeUsername}
                value={username}
                autoFocus
            />
            <Input
                placeholder="Введите пароль"
                theme={ThemeInput.INVERT}
                onChange={onChangePassword}
                value={password}
                type="password"
            />
            <Button
                theme={ThemeButton.ACCENT}
                onClick={onSubmit}
                disabled={isLoading}
            >
                Войти
            </Button>
            {error && <p>Неверный логин или пароль</p>}
        </div>
    );
};
