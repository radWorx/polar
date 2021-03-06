import React from 'react';
import { fireEvent } from '@testing-library/dom';
import { renderWithProviders } from 'utils/tests';
import { NETWORK_IMPORT, NETWORK_NEW, NODE_IMAGES } from 'components/routing';
import NavMenu from './NavMenu';

describe('DetailsList Component', () => {
  const renderComponent = () => {
    return renderWithProviders(<NavMenu />);
  };

  it('should navigate to /network when create menu item clicked', () => {
    const { getByText, history } = renderComponent();
    fireEvent.click(getByText('Create Network'));
    expect(history.location.pathname).toEqual(NETWORK_NEW);
  });

  it('should navigate to /nodes when manage nodes item clicked', () => {
    const { getByText, history } = renderComponent();
    fireEvent.click(getByText('Manage Images'));
    expect(history.location.pathname).toEqual(NODE_IMAGES);
  });

  it('should navigate to import page when menu item is clicked', () => {
    const { getByText, history } = renderComponent();
    fireEvent.click(getByText('Import Network'));
    expect(history.location.pathname).toEqual(NETWORK_IMPORT);
  });
});
