import React from 'react';
import { render } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
    it('renders correctly', () => {
        const { queryByTestId } = render(<LoginForm />);

        expect(queryByTestId('LoginForm')).toBeTruthy();
    });
});