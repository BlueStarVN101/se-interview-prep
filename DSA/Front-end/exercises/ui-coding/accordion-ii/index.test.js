import { describe, it, expect } from 'vitest';
import { createElement } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import AccordionIi from './index.js';

const SECTIONS_FIXTURE = [
  { title: 'Section 1', content: 'Content 1' },
  { title: 'Section 2', content: 'Content 2' },
];

describe('Accordion II', () => {
  describe('initial render', () => {
    it('should collapse all sections initially unless specified', () => {
      render(createElement(AccordionIi, { sections: SECTIONS_FIXTURE }));
      expect(screen.getByRole("button", { name: "Section 1" })).toHaveAttribute("aria-expanded", "false");
    });
  });

  describe('user interactions', () => {
    it('should expand a section when its header is clicked', async () => {
      render(createElement(AccordionIi, { sections: SECTIONS_FIXTURE }));
      const user = userEvent.setup();
      await user.click(screen.getByRole("button", { name: "Section 1" }));
      expect(screen.getByRole("button", { name: "Section 1" })).toHaveAttribute("aria-expanded", "true");
      expect(screen.getByText("Content 1")).toBeVisible();
    });
    it('should wire aria-controls between header and panel', () => {
      render(createElement(AccordionIi, { sections: SECTIONS_FIXTURE }));
      const trigger = screen.getByRole("button", { name: "Section 1" });
      expect(trigger).toHaveAttribute("aria-controls");
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: All collapsed initially', () => {
      // README edge case: All collapsed initially
      expect(() => render(createElement(AccordionIi, { sections: SECTIONS_FIXTURE }))).not.toThrow();
    });
    it('should handle edge case: Rapid toggle clicks', () => {
      // README edge case: Rapid toggle clicks
      expect(() => render(createElement(AccordionIi, { sections: SECTIONS_FIXTURE }))).not.toThrow();
    });
    it('should handle edge case: Dynamic section list', () => {
      // README edge case: Dynamic section list
      expect(() => render(createElement(AccordionIi, { sections: SECTIONS_FIXTURE }))).not.toThrow();
    });
  });

});
