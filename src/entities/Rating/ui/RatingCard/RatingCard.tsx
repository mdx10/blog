import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './RatingCard.module.scss';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        onAccept,
        onCancel,
        title,
        feedbackTitle,
        hasFeedback,
        rate = 0,
    } = props;
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');
    const { t } = useTranslation();

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedback) {
                setIsOpenModal(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept],
    );

    const acceptHandler = useCallback(() => {
        setIsOpenModal(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const canselHandler = useCallback(() => {
        setIsOpenModal(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <div className={styles.modalContent}>
            <h3 className={styles.title}>{feedbackTitle}</h3>
            <Input label="Ваш отзыв" value={feedback} onChange={setFeedback} />
            <div className={styles.buttons}>
                <Button onClick={acceptHandler} theme={ThemeButton.ACCENT}>
                    Отправить
                </Button>
                <Button onClick={canselHandler} theme={ThemeButton.PRIMARY}>
                    Закрыть
                </Button>
            </div>
        </div>
    );

    return (
        <div className={classNames('', {}, [className])}>
            <div className={styles.ratingContent}>
                <h4 className={styles.title}>
                    {starsCount ? t('Спасибо за вашу оценку!') : title}
                </h4>
                <StarRating
                    selectedStars={starsCount}
                    size={54}
                    onSelect={onSelectStars}
                />
            </div>
            <BrowserView>
                <Modal isOpen={isOpenModal} onClose={canselHandler}>
                    {modalContent}
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isOpenModal} onClose={canselHandler}>
                    {modalContent}
                </Drawer>
            </MobileView>
        </div>
    );
});
