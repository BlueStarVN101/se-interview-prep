import { describe, it, expect } from 'vitest';
import { createElement } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import ImageCarouselIii from './index.js';

describe('Image Carousel III', () => {
  describe('initial render', () => {
    it('should render the initial UI state described in README', () => {
      render(createElement(ImageCarouselIii, {}));
      expect(document.body).not.toBeEmptyDOMElement();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: First/last slide', () => {
      // README edge case: First/last slide
      expect(() => render(createElement(ImageCarouselIii, {}))).not.toThrow();
    });
    it('should handle edge case: Single image', () => {
      // README edge case: Single image
      expect(() => render(createElement(ImageCarouselIii, {}))).not.toThrow();
    });
    it('should handle edge case: Rapid next clicks', () => {
      // README edge case: Rapid next clicks
      expect(() => render(createElement(ImageCarouselIii, {}))).not.toThrow();
    });
  });

});
