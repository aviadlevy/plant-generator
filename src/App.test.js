import {render, screen} from '@testing-library/react';
import App from './App';

test('button exists', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', {
    name: /צור חדש/i
  });
      expect(buttonElement).toBeDefined();
});
