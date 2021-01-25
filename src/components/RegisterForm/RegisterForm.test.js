import React from 'react';
import { render } from '@testing-library/react';
import RegisterForm from './RegisterForm';

describe('RegisterForm', () => {
    it('renders correctly', () => {
        const { queryByTestId } = render(<RegisterForm />);

        expect(queryByTestId('RegisterForm')).toBeTruthy();
    });
});