There has been a masterdata issue which affected the prices of the products. Check if each product has a valid price (integer or float, and greater than or equal to zero). Products with a price of 0 are free and count as a valid price.

The return value should be a Boolean.

Examples
hasValidPrice({ "product": "Milk", price: 1.50 }) ➞ true

hasValidPrice({ "product": "Cheese", price: -1 }) ➞ false

hasValidPrice({ "product": "Eggs", price: 0 }) ➞ true

hasValidPrice({ "product": "Cereals", price: "3.0" }) ➞ false

hasValidPrice() ➞ false

Notes
Run the tests first to see the results before making changes and understand why eggs is returning 0 and flour is returning undefined.