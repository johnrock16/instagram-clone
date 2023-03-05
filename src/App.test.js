import { render, screen } from '@testing-library/react';
import ProfilePage from './js/pages/profilePage';

describe('profile Page', () => {
  render(<ProfilePage userID="Coffeislife" />);
  test("info has loaded", ()=>{
    const profileName = screen.getByText(/Audra Colleen/i);
    expect(profileName).toBeInTheDocument();
  });
});
