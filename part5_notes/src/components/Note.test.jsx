import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { default as userEvent } from '@testing-library/user-event';
import Note from './Note';

test('renders content', async () => {
  const note = {
    content: 'Component testing is done with react-testing-library',
    important: true,
  };

  const mockHandler = vi.fn();

  render(<Note note={note} toggleImportance={mockHandler} />);

  const button = screen.getByText('make not important');
  await userEvent.click(button);

  screen.debug();

  expect(mockHandler.mock.calls).toHaveLength(1);
});
