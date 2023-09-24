import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Input } from '@/shared/ui/Input';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getAddCommentFormText } from '../model/selectors/addCommentFormSelectors';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../model/slice/addCommentFormSlice';
import styles from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
    isLoading?: boolean;
}

const reducers: ReducersList = {
    addCommentsForm: addCommentFormReducer,
};

const AddCommentForm = (props: AddCommentFormProps) => {
    const { className, onSendComment, isLoading } = props;
    const dispatch = useAppDispatch();
    const text = useSelector(getAddCommentFormText);

    const onChangeCommentText = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch],
    );

    const onSendCommentHandler = useCallback(() => {
        onSendComment(text || '');
        onChangeCommentText('');
    }, [text, onChangeCommentText, onSendComment]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(styles.root, {}, [className])}>
                <h2 className={styles.title}>Оставить комментарий</h2>
                <div className={styles.form}>
                    <Input
                        className={styles.input}
                        placeholder="Текст комментария"
                        onChange={onChangeCommentText}
                        value={text}
                        readonly={isLoading}
                    />
                    <Button
                        theme={ThemeButton.INVERT}
                        onClick={onSendCommentHandler}
                        disabled={isLoading}
                    >
                        Отправить
                    </Button>
                </div>
            </div>
        </DynamicModuleLoader>
    );
};

export default AddCommentForm;
