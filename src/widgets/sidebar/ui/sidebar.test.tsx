import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from './sidebar';
import { TestWithTranslationAndRouter } from 'app/providers/tests/testWithRouter/test-with-router';

describe('Sidebar', () => {
    test('with only first param', () => {
        TestWithTranslationAndRouter(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        TestWithTranslationAndRouter(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
