import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button', () => {
    test('renders button with child text', () => {
        const buttonText = 'Click me';
        render(<Button>{buttonText}</Button>);
        const buttonElement = screen.getByText(buttonText);
        expect(buttonElement).toBeInTheDocument();
    });

    test('applies custom className to button element', () => {
        const customClassName = 'custom-button';
        render(<Button className={customClassName} />);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toHaveClass(customClassName);
    });

    test('applies clear theme to button element', () => {
        render(<Button theme={ThemeButton.CLEAR} />);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toHaveClass('clear');
    });
});
