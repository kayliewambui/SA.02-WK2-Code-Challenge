function findPrimes(numbers) {
    return numbers.filter(num => isPrime(num));
  }
  
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const primes = findPrimes(numbers);
  console.log(primes); // Output: [2, 3, 5, 7]
  