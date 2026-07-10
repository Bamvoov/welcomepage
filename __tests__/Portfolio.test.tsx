/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages/index';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt || ''} />;
  },
}));

// Mock next/router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      basePath: '',
      pathname: '/',
      route: '/',
      query: {},
      asPath: '/',
    };
  },
}));

test('renders portfolio landing page', () => {
  render(<Home theme="dark" setTheme={() => {}} />);
  expect(screen.getAllByText(/Satvik/i).length).toBeGreaterThan(0);
});
