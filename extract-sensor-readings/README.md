A sensor records five readings in chronological order:
const readings = [21, 24, 19, 26, 23];


Write a function:
const getSelectedReadings = readings => {
  // Your solution
};


It should return an object containing only the first, third and fifth readings:
{
  first: 21,
  third: 19,
  fifth: 23
}


For another input:
getSelectedReadings([10, 20, 30, 40, 50]);


the result should be:
{
  first: 10,
  third: 30,
  fifth: 50
}


Requirements:
- Use array destructuring inside the function body.
- Skip the second and fourth elements using empty positions.
- Name your variables first, third and fifth.
- Return an object with those three properties.
- Don't use array indexing (readings[0], etc.) or modify the input.
- You can assume the input always contains exactly five numbers.