import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from './Header';

jest.mock('../../pages/MapPage', () => ({ MapPage: () => <div>MapPage</div> }));
jest.mock('../../pages/ProfilePage', () => ({ ProfilePage: () => <div>ProfilePage</div> }));
jest.mock('../../pages/LoginPage', () => ({ LoginPage: () => <div>LoginPage</div> }));

describe('Header', () => {

    it('renders correctly', () => {
        const { queryByTestId } = render(<Header />);
        expect(queryByTestId('Header')).toBeTruthy();
    });

    describe('when clicked on navigation links', ()=> {
        it('triggers changePage function', ()=> {
            const changePage = jest.fn();
            const { getByText } = render(<Header changePage={changePage}/>);

            fireEvent.click(getByText(/Карта/i));
            expect(changePage).toHaveBeenLastCalledWith('MapPage');

            fireEvent.click(getByText(/Профиль/i));
            expect(changePage).toHaveBeenLastCalledWith('ProfilePage');
        })
    });
});