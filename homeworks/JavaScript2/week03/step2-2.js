function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    const numbers = [];
  
    for (let i = startIndex; i <= stopIndex; i++) {
      numbers.push(i);
  
      if (i % 3 === 0) {
        threeCallback(i);
      }
  
      if (i % 5 === 0) {
        fiveCallback(i);
      }
    }
  
    return numbers;
  }
  
  function sayThree(number) {
    console.log(`Three: ${number}`);
  }
  
  function sayFive(number) {
    console.log(`Five: ${number}`);
  }
  
  // Example usage:
  const startIndex = 1;
  const stopIndex = 15;
  
  threeFive(startIndex, stopIndex, sayThree, sayFive);