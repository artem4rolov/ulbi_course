import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import { TestWithTranslation } from 'shared/helpers/testWithTranslation/testWithTranslation';
import { Sidebar } from './sidebar';

describe('Sidebar', () => {
    test('Тест рендера Sidebar', () => {
        render(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        screen.debug()
    });
});

describe('Sidebar', () => {
    test('Тест наличия класса "collapsed" в компоненте Sidebar', () => {
        // wrapper для работы с компонентами, в которых есть перевод
        TestWithTranslation(<Sidebar />)
        const toggleSidebarButton = screen.getByTestId('sidebar-collapse-btn')
        fireEvent.click(toggleSidebarButton)

        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
        screen.debug()
    });
});
