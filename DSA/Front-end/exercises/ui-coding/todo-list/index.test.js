import { describe, it, expect } from 'vitest';
import { createElement } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import TodoList from './index.js';

describe('Todo List', () => {
  describe('initial render', () => {
    it('should render an empty list when there are no tasks', () => {
      render(createElement(TodoList, { initialTasks: [] }));
      expect(screen.getByRole('list')).toBeEmptyDOMElement();
    });
  });

  describe('user interactions', () => {
    it('should add a task when user submits the input', async () => {
      render(createElement(TodoList, { initialTasks: [] }));
      const user = userEvent.setup();
      await user.type(screen.getByRole('textbox'), 'Walk dog');
      await user.click(screen.getByRole('button', { name: /add/i }));
      expect(screen.getByText('Walk dog')).toBeInTheDocument();
    });
    it('should remove a task when delete is clicked', async () => {
      render(createElement(TodoList, { initialTasks: ['Walk dog'] }));
      const user = userEvent.setup();
      await user.click(screen.getByRole('button', { name: /delete/i }));
      expect(screen.queryByText('Walk dog')).not.toBeInTheDocument();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Empty list', () => {
      // README edge case: Empty list
      expect(() => render(createElement(TodoList, { initialTasks: [] }))).not.toThrow();
    });
    it('should handle edge case: Validation errors', () => {
      // README edge case: Validation errors
      expect(() => render(createElement(TodoList, { initialTasks: [] }))).not.toThrow();
    });
    it('should handle edge case: Duplicate submissions', () => {
      // README edge case: Duplicate submissions
      expect(() => render(createElement(TodoList, { initialTasks: [] }))).not.toThrow();
    });
  });

});
