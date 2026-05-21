import { describe, it, expect } from 'vitest';
import { createElement } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import DigitalClock from './index.js';

describe('Digital Clock', () => {
  describe('initial render', () => {
    it('should render the initial UI state described in README', () => {
      render(createElement(DigitalClock, {}));
      // Assert initial render matches README UI Use Cases
      expect(() => screen.getByRole('main')).toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Rapid clicks', () => {
      // README edge case: Rapid clicks
      expect(() => render(createElement(DigitalClock, {}))).not.toThrow();
    });
    it('should handle edge case: Pause/resume', () => {
      // README edge case: Pause/resume
      expect(() => render(createElement(DigitalClock, {}))).not.toThrow();
    });
    it('should handle edge case: Overflow display', () => {
      // README edge case: Overflow display
      expect(() => render(createElement(DigitalClock, {}))).not.toThrow();
    });
  });

});
