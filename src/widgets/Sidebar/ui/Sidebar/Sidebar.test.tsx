import { fireEvent, screen } from '@testing-library/react';
import {
    componentRender,
} from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('renders Sidebar component with initial state', () => {
        componentRender(<Sidebar />);
        const sidebarElement = screen.getByTestId('sidebar');
        expect(sidebarElement).toBeInTheDocument();
        expect(sidebarElement).not.toHaveClass('collapsed');
    });

    test('toggles collapsed state on button click', () => {
        componentRender(<Sidebar />);
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
        componentRender(<Sidebar className={customClassName} />);
        const sidebarElement = screen.getByTestId('sidebar');
        expect(sidebarElement).toHaveClass(customClassName);
    });
});
