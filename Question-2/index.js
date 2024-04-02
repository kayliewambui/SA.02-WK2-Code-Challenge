//Write a JavaScript function that accepts two numbers to generate an array between them. 
//For example, if the two numbers are 4 and 7, the output should be [4, 5, 6, 7] and -4 and 7 
//should return [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7].

function generateArray(start, end) {
    // Handle cases where start is greater than end
    if (start > end) {
      // Create array in descending order
      return Array.from({ length: start - end + 1 }, (_, i) => start - i);
    } else {
      // Create array in ascending order
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    }
  }
  
  // Example usage
  const ascendingArray = generateArray(4, 7);
  console.log(ascendingArray); // Output: [4, 5, 6, 7]
  
  const descendingArray = generateArray(-4, 7);
  console.log(descendingArray); // Output: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
  