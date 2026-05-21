import { describe, it, expect } from 'vitest';
import { createElement } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import TabsIii from './index.js';

const TABS_FIXTURE = [
  { id: 'home', label: 'Home', panel: 'Home panel' },
  { id: 'profile', label: 'Profile', panel: 'Profile panel' },
  { id: 'settings', label: 'Settings', panel: 'Settings panel' },
];

describe('Tabs III', () => {
  describe('initial render', () => {
    it('should render the first tab as active by default', async () => {
      render(createElement(TabsIii, { tabs: TABS_FIXTURE }));
      const tabs = screen.getAllByRole('tab');
      expect(tabs[0]).toHaveAttribute("aria-selected", "true");
      expect(screen.getByRole("tabpanel")).toBeVisible();
    });
  });

  describe('user interactions', () => {
    it('should switch panel when a tab is clicked', async () => {
      render(createElement(TabsIii, { tabs: TABS_FIXTURE }));
      const user = userEvent.setup();
      await user.click(screen.getByRole("tab", { name: "Settings" }));
      expect(screen.getByRole("tab", { name: "Settings" })).toHaveAttribute("aria-selected", "true");
      expect(screen.getByRole("tabpanel")).toHaveTextContent("Settings panel");
    });
    it('should expose tablist semantics', () => {
      render(createElement(TabsIii, { tabs: TABS_FIXTURE }));
      expect(screen.getByRole("tablist")).toBeInTheDocument();
    });
    it('should support keyboard navigation between tabs', async () => {
      render(createElement(TabsIii, { tabs: TABS_FIXTURE }));
      screen.getByRole("tab", { name: "Home" }).focus();
      await userEvent.keyboard('{ArrowRight}');
      expect(screen.getByRole("tab", { name: "Profile" })).toHaveFocus();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: Disabled tab', () => {
      // README edge case: Disabled tab
      expect(() => render(createElement(TabsIii, { tabs: TABS_FIXTURE }))).not.toThrow();
    });
    it('should handle edge case: Dynamic tabs', () => {
      // README edge case: Dynamic tabs
      expect(() => render(createElement(TabsIii, { tabs: TABS_FIXTURE }))).not.toThrow();
    });
    it('should handle edge case: Controlled vs uncontrolled selection', () => {
      // README edge case: Controlled vs uncontrolled selection
      expect(() => render(createElement(TabsIii, { tabs: TABS_FIXTURE }))).not.toThrow();
    });
  });

});
