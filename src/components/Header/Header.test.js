import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
    it('renders correctly', () => {
        const { queryByTestId } = render(<Header />);
        expect(queryByTestId('Header')).toBeTruthy();
    });

    it('changing page', () => {
        const { getByText } = render(<Header />);
        const mapLink = getByText(/Карта/i);
        const profileLink = getByText(/Профиль/i);
        const logoutLink = getByText(/Выйти/i);

        expect(mapLink).toBeInTheDocument();
        expect(profileLink).toBeInTheDocument();
        expect(logoutLink).toBeInTheDocument();

        // fireEvent.click(mapLink);
    });
});