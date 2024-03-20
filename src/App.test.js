import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {
  render(<App />);
  const counterElement=screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(0); // counter value가 0이 되는건지 보는거임
  //테스트에 맞는 실제코드 작성
  //toBe 값이 0 인지 보는게 아니라
  // toHaveTextContent 를 이용해서 실제 내부에 존재하는값이 무엇인지를 확인 해줘야함.

  
});

test('minus button has correct text', ()=>{
  render(<App />);
  const buttonElement=screen.getByTestId("minus-button");
  expect(buttonElement).toHaveTextContent("-");
})

test('plus button has correct text', ()=>{
  render(<App />);
  const buttonElement=screen.getByTestId("plus-button");
  expect(buttonElement).toHaveTextContent("+");
})


test('When the + button is pressed, the counter changes to 1',()=>{
  render(<App />);
  const buttonElement=screen.getByTestId("plus-button");//버튼과 연결해주기
  fireEvent.click(buttonElement); // 버튼 입력시 
  const counterElement=screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1); // 숫자가 1인지 확인을 해주고 나서 체크.
})

test("When the - button is pressed, the counter changes to -1", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("minus-button");
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(-1);
});

test('on/off button has blue color', ()=>{
  render(<App />);
  const buttonElement=screen.getByTestId("on/off-button");
  expect(buttonElement).toHaveStyle({backgroundColor:"blue"});
})


test("Prevent the -,+ button from being pressed when the on/off button is clicked",()=>{
  render(<App />);
  const onOffButtonElement=screen.getByTestId("on/off-button");
  fireEvent.click(onOffButtonElement);
  const plusButtonElement=screen.getByTestId("plus-button");
  expect(plusButtonElement).toBeDisabled();// disabled가 되어있는지 확인하기.
})





