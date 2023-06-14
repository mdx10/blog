import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import CopyIcon from 'shared/assets/icons/copy-icon.svg';
import styles from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = (props: CodeProps) => {
    const { className, text } = props;
    const onCopy = () => {
        navigator.clipboard.writeText(text);
    };
    return (
        <pre className={classNames(styles.root, {}, [className])}>
            <Button className={styles.button} onClick={onCopy}>
                <CopyIcon className={styles.icon} />
            </Button>
            <code className={styles.code}>
                {text}
            </code>
        </pre>
    );
};
