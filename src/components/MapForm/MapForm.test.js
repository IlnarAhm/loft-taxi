import React from 'react';
import { render } from '@testing-library/react';
import MapForm from './MapForm';

describe('MapForm', () => {
    it('renders correctly', () => {
        const { queryByTestId } = render(<MapForm />);

        expect(queryByTestId('MapForm')).toBeTruthy();
    });
});