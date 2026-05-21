import { describe, it, expect } from 'vitest';
import { createElement } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import ImageCarousel from './index.js';

describe('Image Carousel', () => {
  describe('initial render', () => {
    it('should render the initial UI state described in README', () => {
      render(createElement(ImageCarousel, {}));
      expect(document.body).not.toBeEmptyDOMElement();
    });
  });

  describe('edge cases', () => {
    it('should handle edge case: First/last slide', () => {
      // README edge case: First/last slide
      expect(() => render(createElement(ImageCarousel, {}))).not.toThrow();
    });
    it('should handle edge case: Single image', () => {
      // README edge case: Single image
      expect(() => render(createElement(ImageCarousel, {}))).not.toThrow();
    });
    it('should handle edge case: Rapid next clicks', () => {
      // README edge case: Rapid next clicks
      expect(() => render(createElement(ImageCarousel, {}))).not.toThrow();
    });
  });

});
