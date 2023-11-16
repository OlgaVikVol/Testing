import { render, screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Test App', () => {
  test('renders learn react link', () => {
    render(<App />);
    const ReactTestingExampleElement = screen.getByText(/React Testing Example/i);
    const btn = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/input value.../i)
    expect(ReactTestingExampleElement).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });

  test('element that does not exist', async () => {
    render(<App />);
    // const ReactTestingExampleElement = screen.queryByAltText(/React Testing Example/i);
    // expect(ReactTestingExampleElement).toBeNull()
    screen.debug();
    const ReactTestingExampleElement = await screen.findByText(/data/i);
    expect(ReactTestingExampleElement).toBeInTheDocument();
    expect(ReactTestingExampleElement).toHaveStyle({color: 'red'});
    screen.debug();
  })

  test('CLICK EVENT', () => {
    render(<App />);
    const btn = screen.getByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-element')).toBeNull();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-element')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-element')).toBeNull();
  })

  test('INPUT EVENT', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/input value/i);
    expect(screen.queryByTestId('value-elem')).toContainHTML('');
    //Искуственное событие
    // fireEvent.input(input, {
    //   target: {value: '123'}
    // })
    //близко к пользователю, обрабатываютсяя события нажатия клавиш и т.д.
    userEvent.type(input, '123');
    expect(screen.queryByTestId('value-elem')).toContainHTML('123');
  })
})

