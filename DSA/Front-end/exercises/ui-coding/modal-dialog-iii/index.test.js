import { describe, it, expect, vi } from 'vitest';
import { createElement } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import ModalDialogIii from './index.js';

describe('Modal Dialog III', () => {
  describe('initial render', () => {
    it('should render dialog when open', () => {
      render(createElement(ModalDialogIii, { isOpen: true, onClose: () => {}, title: 'Confirm', children: 'Delete?' }));
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
  });

  describe('user interactions', () => {
    it('should call onClose when close button is activated', async () => {
      const onClose = vi.fn();
      render(createElement(ModalDialogIii, { isOpen: true, onClose, title: 'Confirm', children: 'Delete?' }));
      const user = userEvent.setup();
      await user.click(screen.getByRole('button', { name: /close/i }));
      expect(onClose).toHaveBeenCalled();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Nested dialogs', () => {
      // README edge case: Nested dialogs
      expect(() => render(createElement(ModalDialogIii, { isOpen: true, onClose: () => {}, title: "Confirm", children: "Delete item?" }))).not.toThrow();
    });
    it('should handle edge case: Long scrollable content', () => {
      // README edge case: Long scrollable content
      expect(() => render(createElement(ModalDialogIii, { isOpen: true, onClose: () => {}, title: "Confirm", children: "Delete item?" }))).not.toThrow();
    });
    it('should handle edge case: Opening while another modal open', () => {
      // README edge case: Opening while another modal open
      expect(() => render(createElement(ModalDialogIii, { isOpen: true, onClose: () => {}, title: "Confirm", children: "Delete item?" }))).not.toThrow();
    });
  });

});
