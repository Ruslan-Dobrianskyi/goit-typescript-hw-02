/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/
type ShowMessageType = {
  message: () => void;
}

function showMessage(message: string): void {
  console.log(message);
}


type CalcType = {
  num1: number;
  num2: number;
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}



type CustomErrorType = {
  error: () => never;
  message: string;
}
function customError(message: string): never {
  throw new Error(message);
}

export {};  