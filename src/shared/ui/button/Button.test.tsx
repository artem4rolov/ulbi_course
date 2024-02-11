import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './button';
import { ButtonTheme } from './button.types';

describe('Button', () => {
    test('Тест рендера текста в документе', () => {
        render(<Button theme={ButtonTheme.LINK}>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Тест наличия класса в кастомной кнопке', () => {
        render(<Button theme={ButtonTheme.LINK}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('link');
        screen.debug();
    });
});
