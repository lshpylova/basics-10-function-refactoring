const defaultResult = 0;
let currentResult = defaultResult;
function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){

  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}


function add() {
  const enterNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enterNumber;
  createAndWriteOutput('+', initialResult, enterNumber);
}

function substract()
{
  const enterNumber = getUserNumberInput();
  const initialResult = currentResult;
  const calcDescription = `${currentResult} + ${enterNumber}`;
  currentResult = currentResult - enterNumber;
  createAndWriteOutput('-', initialResult, enterNumber);
}

function multiply()
{
  const enterNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enterNumber;
  createAndWriteOutput('*', initialResult, enterNumber);
}

function divide(){
  const enterNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enterNumber;
  createAndWriteOutput('/', initialResult, enterNumber);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


