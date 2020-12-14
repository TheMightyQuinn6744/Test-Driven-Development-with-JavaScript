const Calculate = {
  factorial(inputNumber){
    for (let i = inputNumber - 1; i >= 1; i--) {
      inputNumber = inputNumber * i;
    }
    return inputNumber;
  }
  if(inputNumber === 0) {
    return 1;
  }
}

module.exports = Calculate;

