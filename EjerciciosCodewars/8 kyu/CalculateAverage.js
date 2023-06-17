//Write a function which calculates the average of the numbers in a given list.
function findAverage(array) {
    if (array.length === 0) {
      return 0;
    }
  
    let sum = 0; 
    for (let i = 0; i < array.length; i++) {
      sum = sum + array[i];
    } 
    let average = sum / array.length;  
    return average;
  }
  