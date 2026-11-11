Write a function named increaseEmployeeBonus that accepts:
- employees: an array of employee objects
- targetId: the employee ID to update
- increase: the amount to add to the employee's bonus
Each employee has a nested compensation.bonus object containing an amount and a maximum.

Your function must calculate the new bonus amount, cap it at the employee's maximum, and update the employee only if the calculated amount differs from the original.
Input
const employees = [
  {
    id: 101,
    name: "Alice",
    compensation: {
      currency: "USD",
      bonus: {
        amount: 300,
        maximum: 500,
        eligible: true
      }
    }
  },
  {
    id: 102,
    name: "Bob",
    department: "Engineering",
    compensation: {
      currency: "USD",
      bonus: {
        amount: 500,
        maximum: 500,
        eligible: true
      }
    }
  },
  {
    id: 103,
    name: "Charlie",
    compensation: {
      currency: "EUR",
      bonus: {
        amount: 150,
        maximum: 400,
        eligible: false
      }
    }
  }
];


Expected behavior
Call	Result	Employee reference
ID 101, increase 100	300 → 400	New
ID 101, increase 300	300 → 500	New
ID 101, increase 0	300 → 300	Original
ID 102, increase 100	500 → 500	Original
ID 103, increase 50	150 → 200	New
ID 999, increase 100	No match	All original

For this exercise, eligible is simply an existing property to preserve. It does not affect the calculation.
Requirements
1. Declare the function with const and use an arrow function.
2. Use .map() to create a new array.
3. Use a block-bodied .map() callback with an explicit return.
4. Calculate the new bonus once, using const newAmount and Math.min().
5. Use a ternary to update only when the employee ID matches and newAmount differs from the current amount.
6. Use three object spreads: employee, compensation, and bonus.
7. Preserve all other properties, including unexpected ones.
8. Do not mutate the original data.
9. Preserve original employee object references when no update is needed.
10. Always return a new array, even when no employee changes.
Assume increase is a nonnegative finite number, IDs are unique, and every employee has a bonus amount between zero and their maximum.