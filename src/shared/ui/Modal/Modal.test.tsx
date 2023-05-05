import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal', () => {
    it('renders modal when isOpen is true', () => {
        render(
            <Modal isOpen>
                <div>Modal content</div>
            </Modal>,
        );

        const modal = screen.getByTestId('modal');
        const modalContent = screen.getByText('Modal content');
        expect(modalContent).toBeInTheDocument();
        expect(modal).toHaveClass('opened');
    });

    it('does not render modal when isOpen is false', () => {
        render(
            <Modal isOpen={false}>
                <div>Modal content</div>
            </Modal>,
        );

        const modal = screen.getByTestId('modal');
        expect(modal).not.toHaveClass('opened');
    });

    it('calls onClose when overlay is clicked', () => {
        const onCloseMock = jest.fn();
        render(
            <Modal isOpen onClose={onCloseMock}>
                <div>Modal content</div>
            </Modal>,
        );

        const overlay = screen.getByTestId('modal-overlay');
        fireEvent.click(overlay);

        expect(onCloseMock).toHaveBeenCalled();
    });

    it('does not call onClose when content is clicked', () => {
        const onCloseMock = jest.fn();
        render(
            <Modal isOpen onClose={onCloseMock}>
                <div>Modal content</div>
            </Modal>,
        );

        const modalContent = screen.getByText('Modal content');
        fireEvent.click(modalContent);

        expect(onCloseMock).not.toHaveBeenCalled();
    });

    it('calls onClose when Escape key is pressed', () => {
        const onCloseMock = jest.fn();
        render(
            <Modal isOpen onClose={onCloseMock}>
                <div>Modal content</div>
            </Modal>,
        );

        fireEvent.keyDown(window, { key: 'Escape' });

        expect(onCloseMock).toHaveBeenCalled();
    });
});
