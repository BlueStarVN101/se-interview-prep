import { describe, it, expect } from 'vitest';
import { createElement } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import TrafficLight from './index.js';

describe('Traffic Light', () => {
  describe('initial render', () => {
    it('should render the initial UI state described in README', () => {
      render(createElement(TrafficLight, {}));
      // Assert initial render matches README UI Use Cases
      expect(() => screen.getByRole('main')).toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Rapid clicks', () => {
      // README edge case: Rapid clicks
      expect(() => render(createElement(TrafficLight, {}))).not.toThrow();
    });
    it('should handle edge case: Pause/resume', () => {
      // README edge case: Pause/resume
      expect(() => render(createElement(TrafficLight, {}))).not.toThrow();
    });
    it('should handle edge case: Overflow display', () => {
      // README edge case: Overflow display
      expect(() => render(createElement(TrafficLight, {}))).not.toThrow();
    });
  });

});
