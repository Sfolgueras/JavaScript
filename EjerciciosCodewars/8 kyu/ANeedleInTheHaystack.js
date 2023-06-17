//Write a function findNeedle() that takes an array full of junk but containing one "needle"
//After your function finds the needle it should return a message (as a string)
function findNeedle(haystack) {   
    const posicion = haystack.indexOf('needle');
    if (posicion !== -1) {
      return `found the needle at position ${posicion}`;
    } else {
      return 'needle not found';
    }  
  }