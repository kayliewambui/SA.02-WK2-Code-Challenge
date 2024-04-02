//Write a function that accepts a string as input and swaps the case of each character. 
//For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

function swapCase(str) {
    return str
      .split("") //Converts the string into an array of individual characters
      .map((char) => //Iterates through each character (char) in the array and applies the provided function.
        char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
      )
      .join(""); //Joins the modified characters back into a string
  }
  
  // Example usage
  const text = "The Quick Brown Fox";
  const swappedText = swapCase(text);
  console.log(swappedText); // Output: tHE qUICK bROWN fOX