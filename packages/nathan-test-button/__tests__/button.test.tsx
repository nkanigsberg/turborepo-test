import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ElementsButton, ElementsButtonProps } from '../button';

describe('<ElementsButton>', () => {
  const props: ElementsButtonProps = {
    label: 'Button',
    variant: 'default',
    size: 'medium',
    priority: 'primary',
    disabled: false,
    onClick: jest.fn(),
  };

  test('should render', () => {
    const { getByRole } = render(<ElementsButton {...props} />);
    expect(getByRole('button')).toBeInTheDocument();
  });

  test.each`
    variant        | expected
    ${'default'}   | ${props.label}
    ${'icon-only'} | ${''}
    ${'text-only'} | ${props.label}
  `(
    `label should be '$expected' when variant is '$variant'`,
    ({ variant, expected }) => {
      const { getByRole } = render(
        <ElementsButton {...props} variant={variant} />
      );
      expect(getByRole('button')).toHaveTextContent(expected);
    }
  );

  test('onClick event should be called', async () => {
    const { getByRole } = render(<ElementsButton {...props} />);
    await userEvent.click(getByRole('button'));
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});
