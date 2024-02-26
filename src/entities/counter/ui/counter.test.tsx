import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { TestWithTranslationAndRouter } from 'app/providers/tests/testWithRouter/test-with-router';
import { Counter } from './counter';

describe('Sidebar', () => {
    test('with only first param', () => {
        TestWithTranslationAndRouter(<Counter />, {initialState: {counter: {value: 10}}});
        const incrementBtn = screen.getByTestId('counter-test-increment')
        const decrementBtn = screen.getByTestId('counter-test-decrement')

        expect(screen.getByTestId('counter-test-value')).toHaveTextContent('10');
    });
});
