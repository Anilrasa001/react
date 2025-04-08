import { fireEvent, render, screen } from '@testing-library/react';

import HelloComp from './HelloComp';
describe('Group of tests', () => {
test('renders Hello component', () => {
  render(<HelloComp />);
  screen.debug();
  expect(screen.getByRole('heading')).toHaveTextContent('React');
  expect(screen.queryAllByText('World of React'));
  expect(screen.getByText('React is awesome!'));
  
  expect(screen.getByText('Iam a paragraph'))


})


test('Checking with buttons',()=>
{
  render(<HelloComp />);
//expect(screen.getByRole('button')).toHaveTextContent("click");
expect(screen.getByRole('button').textContent).toBe("click me");


const button =screen.getByRole('button');
fireEvent.click(button);
expect(screen.getByText('I APPAR PONLY AFTER BUTTON CLICK')).toBeInTheDocument();

});

});// end of describe