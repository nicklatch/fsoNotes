import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NoteForm from './NoteForm';
import userEvent from '@testing-library/user-event';
import { expect, vi } from 'vitest';

test('<NoteForm /> updates parent state and calls onSubmit', async () => {
  const createNote = vi.fn();

  render(<NoteForm createNote={createNote} />);

  const input = screen.getByRole('textbox');
  const sendButton = screen.getByText('Save');

  await userEvent.type(input, 'testing a form...');
  await userEvent.click(sendButton);

  expect(createNote.mock.calls).toHaveLength(1);
  expect(createNote.mock.calls[0][0].content).toBe('testing a form...');
});
