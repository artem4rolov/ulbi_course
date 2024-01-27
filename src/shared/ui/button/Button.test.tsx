import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './button';
import { ButtonTheme } from './button.types';

describe('Button', () => {
    test('Test render', () => {
        render(<Button theme={ButtonTheme.LINK}>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Test clear theme', () => {
        render(<Button theme={ButtonTheme.LINK}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('link');
        screen.debug();
    });
});
