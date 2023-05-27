import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { default as userEvent } from '@testing-library/user-event';
import Togglable from './Toggleable';

describe('<Togglable />', () => {
  let container;

  beforeEach(() => {
    container = render(
      <Togglable buttonLabel='show...'>
        <div className='testDiv'>toggleable content</div>
      </Togglable>
    ).container;
  });

  test('renders its children', async () => {
    await screen.findAllByText('toggleable content');
  });

  test('at start the children are not displayed', async () => {
    const div = container.querySelector('.togglableContent');
    expect(div).toHaveStyle('display: none');
  });

  test('after clicking the button, children are displayed', async () => {
    const button = screen.getByText('show...');
    await userEvent.click(button);

    const div = container.querySelector('.togglableContent');
    expect(div).not.toHaveStyle('display: none');
  });
});
