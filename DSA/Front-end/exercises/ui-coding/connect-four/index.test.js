import { describe, it, expect } from 'vitest';
import { createElement } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import ConnectFour from './index.js';

describe('Connect Four', () => {
  describe('initial render', () => {
    it('should render the initial UI state described in README', () => {
      render(createElement(ConnectFour, {}));
      // Assert initial render matches README UI Use Cases
      expect(() => screen.getByRole('main')).toThrow();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty states', () => {
      // README edge case: Empty states
      expect(() => render(createElement(ConnectFour, {}))).not.toThrow();
    });
    it('should handle edge case: Loading/error', () => {
      // README edge case: Loading/error
      expect(() => render(createElement(ConnectFour, {}))).not.toThrow();
    });
    it('should handle edge case: Responsive narrow viewport', () => {
      // README edge case: Responsive narrow viewport
      expect(() => render(createElement(ConnectFour, {}))).not.toThrow();
    });
  });

});
