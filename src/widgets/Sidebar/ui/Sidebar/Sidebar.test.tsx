import { fireEvent, screen } from '@testing-library/react';
import {
    renderWithTranslations,
} from 'shared/lib/tests/renderWithTranslations/renderWithTranslations';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('renders Sidebar component with initial state', () => {
        renderWithTranslations(<Sidebar />);
        const sidebarElement = screen.getByTestId('sidebar');
        expect(sidebarElement).toBeInTheDocument();
        expect(sidebarElement).not.toHaveClass('collapsed');
    });

    test('toggles collapsed state on button click', () => {
        renderWithTranslations(<Sidebar />);
        const sidebarElement = screen.getByTestId('sidebar');
        const collapseButton = screen.getByTestId('sidebar-toggle');

        expect(sidebarElement).not.toHaveClass('collapsed');

        fireEvent.click(collapseButton);

        expect(sidebarElement).toHaveClass('collapsed');

        fireEvent.click(collapseButton);

        expect(sidebarElement).not.toHaveClass('collapsed');
    });

    test('applies custom className to sidebar element', () => {
        const customClassName = 'custom-sidebar';
        renderWithTranslations(<Sidebar className={customClassName} />);
        const sidebarElement = screen.getByTestId('sidebar');
        expect(sidebarElement).toHaveClass(customClassName);
    });
});
