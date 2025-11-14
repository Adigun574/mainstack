import { render, screen } from '@testing-library/react';
import Appbar from './Appbar';
import { appbarIcons } from '../../data/appbar';
import '@testing-library/jest-dom';

describe('Appbar', () => {
  it('renders all icons', () => {
    render(<Appbar />);
    
    appbarIcons.forEach((icon) => {
      expect(screen.getByAltText(icon.label)).toBeInTheDocument();
    });
  });

  it('shows tooltip on hover', () => {
    render(<Appbar />);

    const firstIcon = screen.getByAltText(appbarIcons[0].label);

    firstIcon.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));

    expect(screen.getByText(appbarIcons[0].label)).toBeInTheDocument();
  });
});