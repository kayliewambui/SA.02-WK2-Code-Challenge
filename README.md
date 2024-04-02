# SA.02-WK2-Code-Challenge

#### Date, 2024/03/31

#### By *Kaylie Wambui*

## Description
This is my week 2 code challenge and it contains 3 challenges:
*Question-1:*
    Write a function that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
## Solution
    *split("")*: Converts the string into an array of individual characters.
    *map((char) => ... )*: Iterates through each character (char) in the array and applies the provided function.
    *Ternary Operator*: Checks if the character is lowercase (char === char.toLowerCase()) and if true, converts it to uppercase using char.toUpperCase(). Otherwise, it converts to lowercase with char.toLowerCase().
    *join("")*: Joins the modified characters back into a string.

*Question-2:*
    Write a JavaScript function that accepts two numbers to generate an array between them. For example, if the two numbers are 4 and 7, the output should be [4, 5, 6, 7] and -4 and 7 should return [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7].
## Solution
    The solution declares a function that utilizes the Array.from method along with the use of destructuring assignment within the callback function. Here's a breakdown of how it works:

    *Array.from({ length: ... }, ...)*: This creates a new array with a specific length determined by the expression after length.  
    *Destructuring Assignment (_, i)*: This destructures the arguments passed to the callback function within map. The first argument (_) is discarded, and the second argument (i) represents the current index in the loop.
    *Conditional Logic*: The function checks if start is greater than end.
    If true, it creates an array in descending order by subtracting the current index i from start.
    If false, it creates an array in ascending order by adding the current index i to start.


*Question-3:*
    You are tasked with writing a function that takes an array of numbers as input and returns a new array containing only the prime numbers from the original array. How would you implement this function efficiently, ensuring that it accurately identifies prime numbers and returns them in the same order they appear in the input array? For example if you provide an array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] it should return an array [2, 3, 5, 7].
## Solution
    This solution utilizes two functions:

    1. isPrime(num): This helper function determines if a number is prime.

        It handles edge cases like 1 and numbers less than or equal to 3.
        It efficiently checks for divisibility only by odd numbers up to the square root of the number, significantly improving performance for larger numbers.
    2.findPrimes(numbers): This main function takes the array of numbers.

        It uses the filter method to create a new array containing only elements that pass the isPrime check.

## Installation
You use git clone to be able to download the documents in the GitHub

## Installation Requirements
Git

### Installation instruction
```
Git clone git@github.com:kayliewambui/SA.02-WK2-Code-Challenge.git

```

## Technologies used
Javascript

## Support and contact details
github.com/kayliewambui

### License
The content of this site is licensed under the MIT license
