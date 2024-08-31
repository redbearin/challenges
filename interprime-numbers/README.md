An interprime number is a composite number which is equidistant from two consecutive primes. For example, the interprime 6 is 1 point after 5, a prime, and 1 point before the next prime, 7. Another interprime is 93, which lies midway between primes 89 and 97.

Create a function that takes a number n as input. If n is an interprime number, return an array containing the two consecutive primes between which it lies. If it isn't, return an empty array.

Examples
interprime(6) ➞ [5, 7]

interprime(9) ➞ [7, 11]

interprime(8) ➞ []

Notes
Interprimes cannot be prime themselves (otherwise the primes would not have been consecutive).