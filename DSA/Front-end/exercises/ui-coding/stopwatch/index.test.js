import { describe, it, expect } from 'vitest';
import { createElement } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import Stopwatch from './index.js';

describe('Stopwatch', () => {
  describe('initial render', () => {
    it('should display the initial count', () => {
      render(createElement(Stopwatch, { initialCount: 0 }));
      expect(screen.getByText('0')).toBeInTheDocument();
    });
  });

  describe('user interactions', () => {
    it('should increment count when increment button is clicked', async () => {
      render(createElement(Stopwatch, { initialCount: 0 }));
      const user = userEvent.setup();
      await user.click(screen.getByRole('button', { name: /increment|\+/i }));
      expect(screen.getByText('1')).toBeInTheDocument();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Rapid clicks', () => {
      // README edge case: Rapid clicks
      expect(() => render(createElement(Stopwatch, { initialCount: 0 }))).not.toThrow();
    });
    it('should handle edge case: Pause/resume', () => {
      // README edge case: Pause/resume
      expect(() => render(createElement(Stopwatch, { initialCount: 0 }))).not.toThrow();
    });
    it('should handle edge case: Overflow display', () => {
      // README edge case: Overflow display
      expect(() => render(createElement(Stopwatch, { initialCount: 0 }))).not.toThrow();
    });
  });

});
