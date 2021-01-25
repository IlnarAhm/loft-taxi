import React from 'react';
import { render } from '@testing-library/react';
import ProfileForm from './ProfileForm';

describe('ProfileForm', () => {
    it('renders correctly', () => {
        const { queryByTestId } = render(<ProfileForm />);

        expect(queryByTestId('ProfileForm')).toBeTruthy();
    });
});