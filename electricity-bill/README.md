Create a function that takes number of units consumed by the customer and returns calculated Electricity Bill as per following conditions:

First 100 Units will be charged at $1/unit.
Next 100 Units will be charged at $2/unit.
Next 100 Units will be charged at $3/unit.
Next 200 Units will be charged at $4/unit.
Next Units will be charged at $5/unit.
10% tax to be added in final amount.
Extra $15 to be added for Meter Charge.
Examples
electricityBill(100) ➞ 125
// 100 units at $1/unit = 100,
// 10% Tax = 10,
// $15 for Meter Charge = 15,
// Electricity Bill = 100 + 10 + 15

electricityBill(225) ➞ 427.5
// 100 units at $1/unit = 100, 100 units at $2/unit = 200, 25 units at $3/unit = 75
// 10% Tax = 37.5,
// 15$ for Meter Charge = 15,
// Electricity Bill = 100 + 200 + 75 + 22.5 + 15 = 427.50

electricityBill(300) ➞ 675
// 100 units at $1/unit = 100, 100 units at $2/unit = 200, 100 units at $3/unit = 300
// 10% Tax = 60,
// 15$ for Meter Charge = 15,
// Electricity Bill = 100 + 200 + 300 + 60 + 15 = 675

Notes
Return final calculated Electricity Bill rounded up to two decimal places.